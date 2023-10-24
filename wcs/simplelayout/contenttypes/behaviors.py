from ftw.referencewidget.sources import ReferenceObjSourceBinder
from ftw.referencewidget.widget import ReferenceBrowserWidget
from plone.app.contenttypes.behaviors.collection import Collection
from plone.app.contenttypes.behaviors.collection import ICollection
from plone.app.contenttypes.behaviors.collection import ISyndicatableCollection
from plone.app.dexterity.textindexer.directives import searchable
from plone.app.textfield import RichText
from plone.app.z3cform.widget import AjaxSelectFieldWidget
from plone.autoform import directives
from plone.autoform.interfaces import IFormFieldProvider
from plone.base.interfaces.syndication import ISyndicatable
from plone.namedfile.field import NamedBlobImage
from plone.schema import JSONField
from plone.supermodel import model
from plone.supermodel.directives import primary
from wcs.simplelayout import _
from wcs.simplelayout.contenttypes import utils
from wcs.simplelayout.contenttypes.vocabs import sort_index_vocabulary
from wcs.simplelayout.contenttypes.vocabs import sort_order_vocabulary
from z3c.relationfield import RelationChoice
from z3c.relationfield import RelationList
from z3c.relationfield.schema import Relation
from zope import schema
from zope.component import adapter
from zope.interface import implementer
from zope.interface import Interface
from zope.interface import Invalid
from zope.interface import invariant
from zope.interface import provider
from zope.schema.interfaces import InvalidURI
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


class IBlockMarker(Interface):
    """Marker interface for simplelayout blocks"""


@provider(IFormFieldProvider)
class ISimplelayout(model.Schema):

    model.fieldset("layout", label=_("Layout"), fields=["slblocks_layout"])
    directives.omitted('slblocks_layout')
    slblocks_layout = JSONField(
        title="Blocks Layout",
        description="The JSON representation of the object blocks layout. Must be a JSON array.",  # noqa
        schema=LAYOUT_SCHEMA,
        defaultFactory=lambda: {"items": []},
        required=False,
    )


@provider(IFormFieldProvider)
class INews(model.Schema):

    news_date = schema.Datetime(
        title=_('news_date_label', default='Date'),
        description=_('news_date_description',
                      default='News will be sorted by this date'),
        required=True,
        defaultFactory=utils.today,
    )


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
class IImageBlockSortOptions(model.Schema, IBlockMarker):
    sort_on = schema.Choice(
        title=_('label_sort_on', default='Sort by'),
        required=True,
        default="sortable_title",
        source=sort_index_vocabulary)

    sort_order = schema.Choice(
        title=_('label_sort_order', default='Sort order'),
        required=True,
        default="ascending",
        vocabulary=sort_order_vocabulary)

    directives.omitted('portal_types')
    portal_types = schema.List(
        title=_('label_portal_types', default='Types'),
        required=True,
        default=["Image"],
        missing_value=["Image"],
        value_type=schema.TextLine())


@provider(IFormFieldProvider)
class IFileBlockSortOptions(model.Schema, IBlockMarker):
    sort_on = schema.Choice(
        title=_('label_sort_on', default='Sort by'),
        required=True,
        default="sortable_title",
        source=sort_index_vocabulary)

    sort_order = schema.Choice(
        title=_('label_sort_order', default='Sort order'),
        required=True,
        default="ascending",
        vocabulary=sort_order_vocabulary)

    directives.omitted('portal_types')
    portal_types = schema.List(
        title=_('label_portal_types', default='Types'),
        required=True,
        default=["File", "Image"],
        missing_value=["File", "Image"],
        value_type=schema.TextLine())


@provider(IFormFieldProvider)
class IBlockNewsOptions(model.Schema, IBlockMarker):

    current_context = schema.Bool(
        title=_('news_listing_config_filter_current_context_label',
                default='Limit to current context'),
        description=_(
            'news_listing_config_filter_current_context_description',
            default='Only show news items from the current context.'),
        default=True,
        required=False,
    )

    directives.read_permission(filter_by_path='wcs.simplelayout.restrictedRead')
    directives.widget('filter_by_path',
                      ReferenceBrowserWidget,
                      allow_nonsearched_types=False,
                      start='parent',
                      override=True)
    filter_by_path = RelationList(
        title=_('news_listing_config_filter_path_label',
                default='Limit to path'),
        description=_('news_listing_config_filter_path_description',
                      default='Only show news items from a specific path.'
                      ' If there is no path, news from the current area will be shown'),
        required=False,
        missing_value=[],
        default=[],
    )

    quantity = schema.Int(
        title=_('news_listing_config_quantity_label', default='Quantity'),
        description=_('news_listing_config_quantity_description',
                      default='The number of news entries to be '
                              'shown at most. Enter 0 for no limitation.'),
        default=5,
    )

    directives.widget(
        "subjects", AjaxSelectFieldWidget, vocabulary="plone.app.vocabularies.Keywords"
    )

    subjects = schema.List(
        title=_('news_listing_config_subjects_label',
                default='Filter by subject'),
        description=_('news_listing_config_subjects_description',
                      default='Only news with the selected subjects will '
                              'be shown.'),
        value_type=schema.Choice(vocabulary='plone.app.vocabularies.Keywords'),
        required=False,
        missing_value=[],
    )

    maximum_age = schema.Int(
        title=_('news_listing_config_maximum_age_label',
                default='Maximum age (days)'),
        description=_('news_listing_config_maximum_age_description',
                      default='Only news younger than this value will be '
                              'rendered. Enter 0 for no limitation.'),
        default=0,
        required=True,
    )

    @invariant
    def is_either_path_or_context(obj):
        """Checks if not both path and current context are defined.
        """
        if obj.current_context and obj.filter_by_path:
            raise Invalid(_(
                'news_listing_config_current_context_and_path_error',
                default='You can not filter by path and current context '
                        'at the same time.')
            )


@provider(IFormFieldProvider)
class IMediaFolderReference(model.Schema):
    directives.read_permission(mediafolder='wcs.simplelayout.restrictedRead')
    directives.widget('mediafolder',
                      ReferenceBrowserWidget,
                      allow_nonsearched_types=True,
                      start='parent')
    mediafolder = RelationChoice(
        title=_('label_mediafolder', default='Mediafolder reference'),
        required=False,
        source=ReferenceObjSourceBinder(
            override=True,
            selectable=['MediaFolder', ]
        )
    )


@provider(IFormFieldProvider)
class IFilesReference(model.Schema):
    directives.read_permission(files='wcs.simplelayout.restrictedRead')
    directives.widget('files',
                      ReferenceBrowserWidget,
                      allow_nonsearched_types=True,
                      start='parent')
    files = RelationList(
        title=_('label_individual_files', default='Individual files for File/Image listing block'),
        description=_('text_individual_files', default='You can mix and match invididual files and files from a mediafolder reference.'),
        required=False,
        value_type=RelationChoice(
            title=u"Relation-List",
            source=ReferenceObjSourceBinder(
                override=True,
                selectable=['File', 'Image']
            ),
        ),
    )


def valid_url(value):
    """Check for valid url, but don't break on umlauts
    """
    uri_field = schema.URI()

    try:
        return uri_field._validate(value) is None
    except InvalidURI:
        raise Invalid(_(u"Please enter a valid URL."))
    return False


@provider(IFormFieldProvider)
class ILink(model.Schema):
    """Add internal and external link field."""

    model.fieldset(
        'link',
        label=_('Link'),
        fields=('external_link', 'internal_link'),
        description=_(
            u"description_link_fieldset",
            default=(
                u"Use the link section to redirect to another content or website.")
        )
    )

    external_link = schema.TextLine(
        title=_('label_external_link', default='External URL'),
        constraint=valid_url,
        required=False)

    directives.widget('internal_link',
                      ReferenceBrowserWidget,
                      allow_nonsearched_types=True)
    internal_link = Relation(
        title=_('label_internal_link', default='Internal link'),
        required=False,
    )

    @invariant
    def link_invariant(data):
        if data.external_link and data.internal_link:
            raise Invalid(_(
                u"It's not possible to have an internal_link and an "
                u"external_link together"))


@provider(IFormFieldProvider)
class ICollapsableBlock(model.Schema):
    """Add collapsable field."""

    directives.order_after(collapsable='IBlockTitle.show_title')
    collapsable = schema.Bool(
        title=_('label_collapsable', default='Collapsable'),
        description=_('description_collapsable',
                      default='Make block collapsable, for example an FAQ'),
        required=False,
        default=False,
    )


class IBlockSyndicatableCollection(ISyndicatableCollection, IBlockMarker):
    pass


@provider(IFormFieldProvider, ISyndicatable)
class IBlockCollection(ICollection):
    pass


@implementer(IBlockCollection)
@adapter(IBlockMarker)
class BlockCollection(Collection):
    pass
