from datetime import datetime
from datetime import timedelta
from plone import api
from plone.app.contenttypes.behaviors.collection import ISyndicatableCollection
from plone.dexterity.interfaces import IDexterityContent
from plone.restapi.batching import HypermediaBatch
from plone.restapi.deserializer import boolean_value
from plone.restapi.interfaces import IFieldSerializer
from plone.restapi.interfaces import ISerializeToJson
from plone.restapi.interfaces import ISerializeToJsonSummary
from plone.restapi.serializer.converters import datetimelike_to_iso
from plone.restapi.serializer.converters import json_compatible
from plone.restapi.serializer.dxcontent import SerializeFolderToJson
from plone.restapi.serializer.dxcontent import SerializeToJson
from plone.restapi.serializer.dxfields import CollectionFieldSerializer
from plone.restapi.serializer.dxfields import DefaultFieldSerializer
from plone.restapi.serializer.expansion import expandable_elements
from plone.schema import IJSONField
from Products.CMFCore.utils import getToolByName
from urllib import parse
from wcs.simplelayout.contenttypes.behaviors import IBlockAlwaysIncludeItems
from wcs.simplelayout.contenttypes.behaviors import IBlockMarker
from wcs.simplelayout.contenttypes.behaviors import IBlockNewsOptions
from wcs.simplelayout.contenttypes.behaviors import IFileBlockSortOptions
from wcs.simplelayout.contenttypes.behaviors import IFilesReference
from wcs.simplelayout.contenttypes.behaviors import IImageBlockSortOptions
from wcs.simplelayout.contenttypes.behaviors import IMediaFolderReference
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.fields.table import ITableRichText
from wcs.simplelayout.utils import add_layout_properties
from wcs.simplelayout.utils import add_missing_blocks
from wcs.simplelayout.utils import add_sort_limit_to_query
from wcs.simplelayout.utils import convert_table_to_json
from wcs.simplelayout.utils import list_blocks_from_page
from zope.component import adapter
from zope.component import getMultiAdapter
from zope.interface import implementer
from zope.interface import Interface
from zope.schema.interfaces import IList
import json
import logging


BLOCKS_SCHEMA = json.dumps({"type": "object", "properties": {}})
LOG = logging.getLogger(__name__)


def get_blocks(context):
    blocks = []
    for obj in list_blocks_from_page(context):
        block_data = getMultiAdapter((obj, context.REQUEST), ISerializeToJson)(
            include_items=False,
        )
        blocks.append(block_data)
    return blocks


def get_portal_url():
    return api.portal.get().absolute_url()


def expand_by_querystring(context, request, result):
    query = parse.parse_qs(request.get('QUERY_STRING', ''))
    if not request.form.get('expand') and 'expand' in query:
        request.form['expand'] = ','.join(query['expand'])
        result.update(expandable_elements(context, request))


def get_newslisting_query(newslisting):

    def _get_current_path_for_staging(newslisting):
        obj = newslisting.aq_parent
        parent = newslisting.aq_parent

        try:
            from wcs.backend.staging.interfaces import IStaging
            staging = IStaging(parent, None)
            if staging and staging.is_working_copy() and staging.get_baseline():
                obj = staging.get_baseline()
        except ImportError:
            pass

        return '/'.join(obj.getPhysicalPath())

    sort_order = 'descending'
    sort_on = 'Date'

    relations = IBlockNewsOptions(newslisting).filter_by_path
    current_context = IBlockNewsOptions(newslisting).current_context
    paths = ''
    if current_context:
        paths = _get_current_path_for_staging(newslisting)
    elif relations:
        paths = ['/'.join(item.to_object.getPhysicalPath()) for item in relations if item.to_object]
    else:
        paths = '/'.join(api.portal.get().getPhysicalPath())

    query = {
        'path': paths,
        'sort_on': sort_on,
        'sort_order': sort_order,
        'object_provides': 'wcs.simplelayout.contenttypes.behaviors.INews',
    }

    age = IBlockNewsOptions(newslisting).maximum_age
    if age != 0:
        date = datetimelike_to_iso(datetime.now() - timedelta(days=age))
        query['Date'] = {'query': date, 'range': 'min'}

    subjects = IBlockNewsOptions(newslisting).subjects
    if len(subjects) != 0:
        query['Subject'] = subjects

    return query


@implementer(ISerializeToJson)
@adapter(ISimplelayout, Interface)
class SimplelayoutSerializer(SerializeToJson):
    def _build_query(self):
        path = "/".join(self.context.getPhysicalPath())
        query = {
            "path": {"depth": 1, "query": path},
            "sort_on": "getObjPositionInParent",
            "object_provides": {"not": IBlockMarker.__identifier__},
        }
        return query

    def __call__(self, version=None, include_items=True):
        folder_metadata = super().__call__(version=version)

        folder_metadata.update({"is_folderish": True})
        result = folder_metadata

        # Only include items if request and kwarg really want it to inlcude.
        # This prevents a recursive inclusion of all items (tree), since
        # the ISerializeToJson of brains calls the serializer with the argument
        # include_items=False. But so far this go ignored if the request parameter
        # include_items was present.
        include_items_request = self.request.get("include_items", include_items)
        include_items_request = boolean_value(include_items_request)

        if include_items and include_items_request:
            query = self._build_query()

            catalog = getToolByName(self.context, "portal_catalog")
            brains = catalog(query)

            batch = HypermediaBatch(self.request, brains)

            result["items_total"] = batch.items_total
            if batch.links:
                result["batching"] = batch.links

            if "fullobjects" in list(self.request.form):
                result["items"] = getMultiAdapter(
                    (brains, self.request), ISerializeToJson
                )(fullobjects=True)["items"]
            else:
                result["items"] = [
                    getMultiAdapter((brain, self.request), ISerializeToJsonSummary)()
                    for brain in batch
                ]

        expand_by_querystring(self.context, self.request, result)
        result['slblocks'] = self.get_sl_blocks(include_items)
        add_layout_properties(self.context, result)
        return result

    def get_sl_blocks(self, include_items):
        """
        Enriches the default result for simpelayout pages with slblocks.

        {
            "uuid1": {
                "@type": "Block",
                "Attr": "value"
            },
            "uuid2": {
                "@type": "Block",
                "Attr": "value"
            },
            "uuid3": {
                "@type": "Block",
                "Attr": "value"
            },
        }
        """
        if not include_items:
            return {}

        # Only insert blocks if the request was made on the content itself.
        # This avoids a possible max recursion depth exeeded error on
        # listings, like collections.
        actual_url = self.context.REQUEST.ACTUAL_URL.replace('/++api++', '')
        if self.context.absolute_url() != actual_url.removesuffix('/'):
            return {}

        return {block['UID']: block for block in get_blocks(self.context)}


@implementer(ISerializeToJson)
@adapter(IBlockMarker, Interface)
class DefaultBlockSerializer(SerializeFolderToJson):
    """Serializer, which can include its own items by default
    """
    def __call__(self, version=None, include_items=True):
        result = super().__call__(version=version, include_items=include_items)
        if not include_items:
            self._add_items(result)
        return result

    def _add_items(self, result):
        if IBlockAlwaysIncludeItems.providedBy(self.context):
            query = self._build_query()

            catalog = getToolByName(self.context, "portal_catalog")
            brains = catalog(query)

            batch = HypermediaBatch(self.request, brains)

            result["items_total"] = batch.items_total
            if batch.links:
                result["batching"] = batch.links

            result["items"] = getMultiAdapter(
                (brains, self.request), ISerializeToJson
            )(fullobjects=True)["items"]


@implementer(ISerializeToJson)
@adapter(IBlockNewsOptions, Interface)
class NewsListingBlockSerializer(DefaultBlockSerializer):
    def __call__(self, version=None, include_items=True):
        result = super().__call__(version=version)
        include_items = self.request.form.get("include_items", include_items)
        include_items = boolean_value(include_items)
        if include_items:
            self._add_items(result)

        return result

    def _add_items(self, result):
        query = get_newslisting_query(self.context)
        original_b_size = self.request.form.get('b_size', None)
        original_actual_url = self.request['ACTUAL_URL']
        if original_b_size is None:
            self.request.form['b_size'] = IBlockNewsOptions(self.context).quantity
        self.request['ACTUAL_URL'] = self.context.absolute_url()

        try:
            add_sort_limit_to_query(query)
        except ValueError:
            LOG.warn('Cannot set sort_limit')

        lazy_resultset = api.portal.get_tool('portal_catalog').searchResults(**query)
        search_result = getMultiAdapter(
            (lazy_resultset, self.request), ISerializeToJson)(
                fullobjects="fullobjects" in list(self.request.form)
        )
        if original_b_size is None:
            del self.request.form['b_size']
        else:
            self.request.form['b_size'] = original_b_size

        self.request['ACTUAL_URL'] = original_actual_url
        del search_result['@id']
        result.update(search_result)


@implementer(ISerializeToJson)
@adapter(IFileBlockSortOptions, Interface)
class FileBlockSortOptionsSerializer(DefaultBlockSerializer):

    behavior = IFileBlockSortOptions

    def __call__(self, version=None, include_items=True):
        result = super().__call__(version=version)
        include_items = self.request.form.get("include_items", include_items)
        include_items = boolean_value(include_items)
        if include_items or IBlockAlwaysIncludeItems.providedBy(self.context):
            self._add_items(result)

        return result

    def _add_items(self, result):
        sort_on = self.behavior(self.context).sort_on
        sort_order = self.behavior(self.context).sort_order
        portal_types = self.behavior(self.context).portal_types
        query = {
            'path': {'query': self._get_paths()},
            'sort_on': sort_on,
            'sort_order': sort_order,
            'portal_type': portal_types
        }
        original_b_size = self.request.form.get('b_size', None)
        original_actual_url = self.request['ACTUAL_URL']
        if original_b_size is None:
            self.request.form['b_size'] = 10
        self.request['ACTUAL_URL'] = self.context.absolute_url()

        lazy_resultset = api.portal.get_tool('portal_catalog').searchResults(**query)
        search_result = getMultiAdapter(
            (lazy_resultset, self.request), ISerializeToJson)(
                fullobjects="fullobjects" in list(self.request.form)
        )

        if original_b_size is None:
            del self.request.form['b_size']
        else:
            self.request.form['b_size'] = original_b_size

        self.request['ACTUAL_URL'] = original_actual_url

        del search_result['@id']
        result.update(search_result)

    def _get_paths(self):
        paths = []
        mediafolder_behaviour = IMediaFolderReference(self.context, None)
        if (mediafolder_behaviour and
                mediafolder_behaviour.mediafolder and
                mediafolder_behaviour.mediafolder.to_object):
            paths.append(
                '/'.join(self.context.mediafolder.to_object.getPhysicalPath())
            )
        else:
            paths.append(
                ('/'.join(self.context.getPhysicalPath()), 1)
            )

        files_behaviour = IFilesReference(self.context, None)
        if files_behaviour and files_behaviour.files:
            for file_ in files_behaviour.files:
                if file_.to_object:
                    paths.append(
                        '/'.join(file_.to_object.getPhysicalPath())
                    )

        return paths


@implementer(ISerializeToJson)
@adapter(IImageBlockSortOptions, Interface)
class ImageBlockSortOptionsSerializer(FileBlockSortOptionsSerializer):

    behavior = IImageBlockSortOptions


@adapter(IJSONField, ISimplelayout, Interface)
@implementer(IFieldSerializer)
class LayoutFieldSerializer(DefaultFieldSerializer):

    def __call__(self, *args):
        """ This method appends blocks missing in layout at the very end."""
        if self.field.__name__ == 'slblocks_layout':
            actual_url = self.context.REQUEST.ACTUAL_URL.replace('/++api++', '')
            if self.context.absolute_url() != actual_url.removesuffix('/'):
                return json_compatible({})

            value = self.get_value()

            add_missing_blocks(self.context, value)
            return json_compatible(value)
        return super().__call__()


@implementer(ISerializeToJson)
@adapter(ISyndicatableCollection, Interface)
class AllPurposeListingBlockSerializer(DefaultBlockSerializer):
    # Register collection serializer for blocks with the plone.collection behavior
    # Main difference is, that this block always returns the @id of of itself
    # and not the canonical id
    # Plus it avoids a recursion if the collection lists itself
    def __call__(self, version=None, include_items=True):
        result = super().__call__(version=version)
        # No support for always include items
        if not IBlockAlwaysIncludeItems.providedBy(self.context):
            return result

        include_items = self.request.form.get("include_items", include_items)
        include_items = boolean_value(include_items)
        if include_items or IBlockAlwaysIncludeItems.providedBy(self.context):
            self._add_items(result)
        result['@id'] = self.context.absolute_url()
        return result

    def _add_items(self, result):
        results = self.context.results(batch=False)

        original_b_size = self.request.form.get('b_size', None)
        if original_b_size is None:
            self.request.form['b_size'] = self.context.item_count

        batch = HypermediaBatch(self.request, results)

        if original_b_size is None:
            del self.request.form['b_size']
        else:
            self.request.form['b_size'] = original_b_size

        if not self.request.form.get("fullobjects"):
            result["@id"] = batch.canonical_url
        result["items_total"] = batch.items_total
        if batch.links:
            result["batching"] = batch.links

        if "fullobjects" in list(self.request.form):
            result["items"] = [
                getMultiAdapter(
                    (brain.getObject(), self.request), ISerializeToJson
                )(include_items=False)  # Prevent recursion
                for brain in batch
            ]
        else:
            result["items"] = [
                getMultiAdapter((brain, self.request), ISerializeToJsonSummary)()
                for brain in batch
            ]


CONVERT_TOKENS_CUSTOMVIEWFIELDS = {
    'Description': 'description',
    'Date': 'news_date',
    'Title': 'title',
    'EffectiveDate': 'effective',
    'CreationDate': 'creates',
    'ExpirationDate': 'expires',
    'ModificationDate': 'modified',
    'Subject': 'subjects',
    'Type': '@type',
    'getID': 'id',
    'getRemoteUrl': 'remoteUrl',
    'ID': 'id',
    'listCreators': 'creators',
    'portal_type': '@type',
}


@adapter(IList, ISyndicatableCollection, Interface)
@implementer(IFieldSerializer)
class CustomViewFieldsSerializer(CollectionFieldSerializer):

    def __call__(self, *args):
        """Serialize/convert customViewFields to make it usable in the
        frontend"""
        if self.field.__name__ == 'customViewFields':
            result = super().__call__(*args)

            for mapping in result:
                if mapping['token'] in CONVERT_TOKENS_CUSTOMVIEWFIELDS:
                    mapping['token'] = CONVERT_TOKENS_CUSTOMVIEWFIELDS[mapping['token']]

            return result


@adapter(ITableRichText, IDexterityContent, Interface)
@implementer(IFieldSerializer)
class TableRichTextSerializer(DefaultFieldSerializer):
    def __call__(self):
        value = self.get_value()
        result = json_compatible(value, self.context)
        result['json'] = convert_table_to_json(value.output)
        return result
