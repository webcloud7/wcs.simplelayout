from plone.autoform.interfaces import IFormFieldProvider
from plone.restapi import _
from plone.schema import JSONField
from plone.supermodel import model
from zope.interface import Interface
from zope.interface import provider
import json


BLOCKS_SCHEMA = json.dumps({"type": "object", "properties": {}})
"""
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


LAYOUT_SCHEMA = json.dumps(
    {
        "type": "object",
        "properties": {
            "items": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "items": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {}
                            }
                        },
                    }
                }
            }
        },
    }
)
"""
{
    "items": [
        # Row 1
        {
            "@type": "row",
            "items": [
                {
                    "@type": "col",
                    "attr1": "width-12",
                    "items": ["uuid1"]
                }
            ]
        },

        # Row 2
        {
            "@type": "row",
            "items": [
                {
                    "@type": "col",
                    "attr1": "width-8",
                    "items": ["uuid1"]
                },
                {
                    "@type": "col",
                    "attr1": "width-4",
                    "items": ["uuid2", "uuid3"]
                }
            ]
        }
    ]
}
"""


@provider(IFormFieldProvider)
class ISimplelayout(model.Schema):

    model.fieldset("layout", label=_("Layout"), fields=["blocks", "blocks_layout"])

    blocks = JSONField(
        title="Blocks",
        description="The JSON representation of the object blocks information. Must be a JSON object.",  # noqa
        schema=BLOCKS_SCHEMA,
        default={},
        required=False,
    )

    blocks_layout = JSONField(
        title="Blocks Layout",
        description="The JSON representation of the object blocks layout. Must be a JSON array.",  # noqa
        schema=LAYOUT_SCHEMA,
        default={
            "items": [
                {
                    "@type": "row",
                    "items": [
                        {
                            "@type": "col",
                            "attr1": "width-12",
                            "items": ["uuid1"]
                        }
                    ]
                },

                {
                    "@type": "row",
                    "items": [
                        {
                            "@type": "col",
                            "attr1": "width-8",
                            "items": ["uuid1"]
                        },
                        {
                            "@type": "col",
                            "attr1": "width-4",
                            "items": ["uuid2", "uuid3"]
                        }
                    ]
                }
            ]
        },
        required=False,
    )


class IBlockMarker(Interface):
    """Marker interface for simplelayout blocks"""
