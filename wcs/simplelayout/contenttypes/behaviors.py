from plone.app.dexterity.textindexer.directives import searchable
from plone.app.textfield import RichText
from plone.autoform.interfaces import IFormFieldProvider
from plone.namedfile.field import NamedBlobImage
from plone.restapi import _
from plone.schema import JSONField
from plone.supermodel import model
from plone.supermodel.directives import primary
from wcs.simplelayout.contenttypes import utils
from wcs.simplelayout.contenttypes.vocabs import sort_index_vocabulary
from wcs.simplelayout.contenttypes.vocabs import sort_order_vocabulary
from zope import schema
from zope.interface import Interface
from zope.interface import Invalid
from zope.interface import invariant
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
        title=_('label_title', default='Title'),
        required=True)

    show_title = schema.Bool(
        title=_('label_show_title', default='Show title'),
        default=True,
        required=False)


@provider(IFormFieldProvider)
class IBlockText(model.Schema):
    """Default block text behavior"""
    searchable('text')
    primary('text')
    text = RichText(
        title=_('label_text', default='Text'),
        required=False,
        allowed_mime_types=('text/html',))


@provider(IFormFieldProvider)
class IBlockImage(model.Schema):
    model.fieldset(
        'image',
        label=_('Image'),
        fields=['image', 'image_alt_text', 'image_caption']
    )

    image = NamedBlobImage(
        title=_('label_image', default='Image'),
        required=False)

    image_alt_text = schema.TextLine(
        title=_('label_image_alt_text', default='Image alternative text'),
        required=False,
        description=_('description_image_alt_text',
                      default='Enter an alternative text for the image'))

    image_caption = schema.TextLine(
        title=_('label_image_caption', default='Image caption'),
        required=False)


@provider(IFormFieldProvider)
class IVideoUrl(model.Schema):
    video_url = schema.URI(
        title=_('label_video_url', default='Youtube, or Vimeo URL'),
        description=_('Youtube format: http(s)://youtu.be/VIDEO_ID (add start parameter to let '
                      'the vide start at a specific position)<br/>'
                      'Youtube (no-cookie) format: https://www.youtube-nocookie.com/embed/VIDEO_ID<br/>'
                      'Vimeo format: http(s)://vimeo.com/(channels/groups)/'
                      'VIDEO_ID'),
        required=True)

    @invariant
    def validate_video_url(data):
        if utils.is_youtube_url(data.video_url):
            return
        elif utils.is_vimeo_url(data.video_url):
            return
        elif utils.is_youtube_nocookie_url(data.video_url):
            return
        else:
            raise Invalid(_('This is no a valid youtube, or vimeo url.'))


@provider(IFormFieldProvider)
class IBlockSortOptions(model.Schema):
    sort_on = schema.Choice(
        title=_(u'label_sort_on', default=u'Sort by'),
        required=True,
        default="sortable_title",
        source=sort_index_vocabulary)

    sort_order = schema.Choice(
        title=_(u'label_sort_order', default=u'Sort order'),
        required=True,
        default="ascending",
        vocabulary=sort_order_vocabulary)

    computed_query = schema.TextLine(readonly=True)
