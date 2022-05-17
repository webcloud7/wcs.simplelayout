from plone.app.dexterity.textindexer.directives import searchable
from plone.app.textfield import RichText
from plone.autoform.interfaces import IFormFieldProvider
from plone.namedfile.field import NamedBlobImage
from plone.restapi import _
from plone.schema import JSONField
from plone.supermodel import model
from plone.supermodel.directives import primary
from zope import schema
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

    model.fieldset("layout", label=_("Layout"), fields=["slblocks_layout"])

    slblocks_layout = JSONField(
        title="Blocks Layout",
        description="The JSON representation of the object blocks layout. Must be a JSON array.",  # noqa
        schema=LAYOUT_SCHEMA,
        default={},
        required=False,
    )


class IBlockMarker(Interface):
    """Marker interface for simplelayout blocks"""


@provider(IFormFieldProvider)
class IBlockTitle(model.Schema):
    """Default block title behavior"""
    title = schema.TextLine(
        title=_(u'label_title', default=u'Title'),
        required=True)

    show_title = schema.Bool(
        title=_(u'label_show_title', default=u'Show title'),
        default=True,
        required=False)


@provider(IFormFieldProvider)
class IBlockText(model.Schema):
    """Default block text behavior"""
    searchable('text')
    primary('text')
    text = RichText(
        title=_(u'label_text', default=u'Text'),
        required=False,
        allowed_mime_types=('text/html',))


@provider(IFormFieldProvider)
class IBlockImage(model.Schema):
    model.fieldset(
        'image',
        label=_(u'Image'),
        fields=['image', 'image_alt_text', 'image_caption']
    )

    image = NamedBlobImage(
        title=_(u'label_image', default=u'Image'),
        required=False)

    image_alt_text = schema.TextLine(
        title=_(u'label_image_alt_text', default=u'Image alternative text'),
        required=False,
        description=_(u'description_image_alt_text',
                      default=u'Enter an alternative text for the image'))

    image_caption = schema.TextLine(
        title=_(u'label_image_caption', default=u'Image caption'),
        required=False)
