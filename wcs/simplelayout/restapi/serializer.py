from plone import api
from plone.restapi.interfaces import IFieldSerializer
from plone.restapi.interfaces import ISerializeToJson
from plone.restapi.serializer.converters import json_compatible
from plone.restapi.serializer.dxcontent import SerializeFolderToJson
from plone.restapi.serializer.dxfields import DefaultFieldSerializer
from plone.schema import IJSONField
from wcs.simplelayout.contenttypes.behaviors import IBlockMarker
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.utils import LOG
from zope.component import adapter
from zope.component import getMultiAdapter
from zope.interface import implementer
from zope.interface import Interface
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
    catalog = api.portal.get_tool('portal_catalog')
    brains = catalog(**query)
    blocks = getMultiAdapter(
        (brains, context.REQUEST),
        ISerializeToJson
    )(fullobjects=True)["items"]
    result['slblocks'] = {block['UID']: block for block in blocks}


@implementer(ISerializeToJson)
@adapter(ISimplelayout, Interface)
class SimplelayoutSerializer(SerializeFolderToJson):

    def __call__(self, version=None, include_items=True):
        result = super().__call__(version, include_items)
        insert_simplelayout_blocks(self.context, result)
        return result


@adapter(IJSONField, ISimplelayout, Interface)
@implementer(IFieldSerializer)
class LayoutFieldSerializer(DefaultFieldSerializer):

    def __call__(self, *args):
        """ This method appends blocks missing in layout at the very end."""
        if self.field.__name__ == 'slblocks_layout':
            backup = {
                "@type": "row",
                "items": [
                    {
                        "@type": "col",
                        "width": "12",
                        "items": []
                    }
                ]
            }
            value = self.get_value()
            result = {}
            insert_simplelayout_blocks(self.context, result)

            for uid in result['slblocks'].keys():
                if uid not in str(value):
                    backup['items'][0]['items'].append(uid)
            if len(backup['items'][0]['items']):
                value['items'].append(backup)
                LOG.info(f'Amended {len(backup["items"][0]["items"])} blocks '
                         f'on {self.context.absolute_url()}')
            return json_compatible(value)
        return super().__call__()
