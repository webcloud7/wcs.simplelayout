from datetime import datetime
from datetime import timedelta
from plone import api
from plone.app.contenttypes.behaviors.collection import ISyndicatableCollection
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
from urllib import parse
from wcs.simplelayout.contenttypes.behaviors import IBlockMarker
from wcs.simplelayout.contenttypes.behaviors import IBlockNewsOptions
from wcs.simplelayout.contenttypes.behaviors import IBlockSortOptions
from wcs.simplelayout.contenttypes.behaviors import IMediaFolderReference
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.utils import add_missing_blocks
from zope.component import adapter
from zope.component import getMultiAdapter
from zope.interface import implementer
from zope.interface import Interface
from zope.schema.interfaces import IList
import json


BLOCKS_SCHEMA = json.dumps({"type": "object", "properties": {}})


def insert_simplelayout_blocks(context, result):
    """
    Enriches the default result for simpelayout pages with sblocks.

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
    query = {
        'path': {'depth': 1, 'query': '/'.join(context.getPhysicalPath())},
        'object_provides': IBlockMarker.__identifier__,
    }

    # Only insert blocks if the request was made on the content itself.
    # This avoids a possible max recursion depth exeeded error on
    # listings, like collections.
    if context.absolute_url() != context.REQUEST.ACTUAL_URL.removesuffix('/++api++'):
        result['slblocks'] = {}
        return

    catalog = api.portal.get_tool('portal_catalog')
    brains = catalog(**query)
    blocks = getMultiAdapter(
        (brains, context.REQUEST),
        ISerializeToJson
    )(fullobjects=True)["items"]
    result['slblocks'] = {block['UID']: block for block in blocks}


def expand_by_querystring(context, request, result):
    query = parse.parse_qs(request.get('QUERY_STRING', ''))
    if not request.form.get('expand') and 'expand' in query:
        request.form['expand'] = query['expand'][0]
        result.update(expandable_elements(context, request))


@implementer(ISerializeToJson)
@adapter(ISimplelayout, Interface)
class SimplelayoutSerializer(SerializeFolderToJson):

    def __call__(self, version=None, include_items=True):
        result = super().__call__(version, include_items)
        expand_by_querystring(self.context, self.request, result)
        insert_simplelayout_blocks(self.context, result)
        return result


@implementer(ISerializeToJson)
@adapter(IBlockNewsOptions, Interface)
class NewsListingBlockSerializer(SerializeToJson):
    def __call__(self, version=None, include_items=True):
        result = super().__call__(version=version)

        include_items = self.request.form.get("include_items", include_items)
        include_items = boolean_value(include_items)
        if include_items:
            sort_order = 'ascending'
            sort_on = 'Date'

            relations = IBlockNewsOptions(self.context).filter_by_path
            paths = ''
            if not relations:
                paths = '/'.join(self.context.aq_parent.getPhysicalPath())
            else:
                paths = ['/'.join(item.to_object.getPhysicalPath()) for item in paths if item.to_object]

            query = {
                'path': paths,
                'sort_on': sort_on,
                'sort_order': sort_order,
                'object_provides': 'wcs.simplelayout.contenttypes.behaviors.INews',
            }

            age = IBlockNewsOptions(self.context).maximum_age
            if age != 0:
                date = datetimelike_to_iso(datetime.now() - timedelta(days=age))
                query['Date.query'] = date
                query['Date.range'] = 'min'

            if 'b_size' not in self.request.form:
                self.request.form['b_size'] = IBlockNewsOptions(self.context).quantity
            lazy_resultset = api.portal.get_tool('portal_catalog').searchResults(**query)
            search_result = getMultiAdapter(
                (lazy_resultset, self.request), ISerializeToJson)(
                    fullobjects="fullobjects" in list(self.request.form)
            )

            del search_result['@id']
            result.update(search_result)

        return result


@implementer(ISerializeToJson)
@adapter(IBlockSortOptions, Interface)
class BlockSortOptionsSerializer(SerializeToJson):

    def __call__(self, version=None, include_items=True):
        result = super().__call__(version=version)

        include_items = self.request.form.get("include_items", include_items)
        include_items = boolean_value(include_items)
        if include_items:
            sort_on = IBlockSortOptions(self.context).sort_on
            sort_order = IBlockSortOptions(self.context).sort_order
            query = {
                'path': {'query': self._get_path(), 'depth': 1},
                'sort_on': sort_on,
                'sort_order': sort_order,
            }

            if 'b_size' not in self.request.form:
                self.request.form['b_size'] = 10
            lazy_resultset = api.portal.get_tool('portal_catalog').searchResults(**query)
            search_result = getMultiAdapter(
                (lazy_resultset, self.request), ISerializeToJson)(
                    fullobjects="fullobjects" in list(self.request.form)
            )

            del search_result['@id']
            result.update(search_result)

        return result

    def _get_path(self):
        mediafolder_behaviour = IMediaFolderReference(self.context, None)
        if (mediafolder_behaviour and
                mediafolder_behaviour.mediafolder and
                mediafolder_behaviour.mediafolder.to_object):
            return '/'.join(self.context.mediafolder.to_object.getPhysicalPath())
        return '/'.join(self.context.getPhysicalPath())


@adapter(IJSONField, ISimplelayout, Interface)
@implementer(IFieldSerializer)
class LayoutFieldSerializer(DefaultFieldSerializer):

    def __call__(self, *args):
        """ This method appends blocks missing in layout at the very end."""
        if self.field.__name__ == 'slblocks_layout':
            value = self.get_value()
            add_missing_blocks(self.context, value)
            return json_compatible(value)
        return super().__call__()


@implementer(ISerializeToJson)
@adapter(ISyndicatableCollection, Interface)
class AllPurposeListingBlockSerializer(SerializeToJson):
    # Register collection serializer for blocks with the plone.collection behavior
    # Main difference is, that this block always returns the @id of of itself
    # and not the canonical id
    # Plus it avoids a recursion if the collection lists itself
    def __call__(self, version=None, include_items=True):
        result = super().__call__(version=version)

        include_items_request = self.request.form.get("include_items", include_items)
        include_items_request = boolean_value(include_items_request)
        if include_items and include_items_request:
            results = self.context.results(batch=False)
            batch = HypermediaBatch(self.request, results)

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

        result['@id'] = self.context.absolute_url()
        return result


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
