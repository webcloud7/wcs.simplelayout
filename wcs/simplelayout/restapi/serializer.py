from plone import api
from plone.restapi.interfaces import ISerializeToJson
from plone.restapi.serializer.dxcontent import SerializeFolderToJson
from wcs.simplelayout.contenttypes.behaviors import IBlockMarker
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from zope.component import adapter
from zope.interface import implementer
from zope.interface import Interface
from zope.component import getMultiAdapter
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
