from plone import api
from plone.app.z3cform.interfaces import IRichTextWidget
from plone.app.z3cform.utils import dict_merge
from plone.app.z3cform.widgets.richtext import RichTextWidget
from plone.schema import JSONField
from wcs.simplelayout import _
from z3c.form.interfaces import IFieldWidget
from z3c.form.widget import FieldWidget
from zope.interface import Interface
from zope.interface import implementer
from zope.interface import implementer_only


class ITableRichTextWidgetConfiguration(Interface):

    tiny = JSONField(
        title=_('label_table_widget_configuration', default=u'Table widget configuration'),
        description=_('help_table_widget_configuration',
                      default='Configure the table widget. key is {typename}.{fieldname} and the value is the tiny config'),
        schema='{"type": "object"}',
        default={}
    )


class ITableRichTextWidget(IRichTextWidget):
    """Marker interface for table Rich Text Widget"""


@implementer_only(ITableRichTextWidget)
class TableRichTextWidget(RichTextWidget):

    def get_pattern_options(self):
        options = super().get_pattern_options()
        del options['upload']
        tiny = options['tiny']
        tiny.pop('templates', None)

        # Default tiny table configuration
        tiny['noneditable_class'] = 'nonedit'
        tiny['editable_class'] = 'editcontent'
        tiny['plugins'] = ['plonelink', 'table']
        tiny['menubar'] = ''
        tiny['toolbar'] = 'bold | table tablerowheader tablecolheader code unlink plonelink'
        tiny['table_column_resizing'] = 'preservetable'
        tiny['object_resizing'] = 'table'
        tiny['table_header_type'] = 'sectionCells'
        tiny['valid_children'] = '-body[p|div|br|img|a|#text],+body[table],-td[table|div]'
        tiny['invalid_styles'] = 'height'
        tiny['external_plugins'] = {'tableOnly': f'{api.portal.get().absolute_url()}/++resource++simplelayout/js/src/tinymce_plugin.js'}

        merged_tiny_config = dict_merge(
            tiny,
            api.portal.get_registry_record(
                'wcs.simplelayout.table.tiny',
                default={}
            ).get(
                f'{getattr(self.form, "portal_type", "")}.{self.field.__name__}', {}
            )
        )
        options['tiny'] = merged_tiny_config

        return options

    def allowedMimeTypes(self):
        return ['text/html']


@implementer(IFieldWidget)
def TableRichTextFieldWidget(field, request):
    return FieldWidget(field, TableRichTextWidget(request))
