from lxml import etree
from plone.app.textfield import editor
from plone.app.textfield import RichText
from plone.app.textfield.handler import RichTextHandler_
from plone.app.textfield.interfaces import IRichText
from plone.schemaeditor.fields import FieldFactory
from wcs.simplelayout import _
from zope.interface import implementer
from zope.interface import Invalid
from zope.schema.interfaces import IFromUnicode


@implementer(IRichText, IFromUnicode)
class TableRichText(RichText):

    def _validate(self, value):
        super()._validate(value)

        self._validate_table(value)

    def _validate_table(self, value):
        html_parser = etree.HTMLParser()
        document = etree.fromstring(value.raw, parser=html_parser)
        tables = document.xpath('//table')
        if len(tables) > 1:
            raise Invalid('Only one table is allowed')

        body_elements = document.xpath('/html/body')[0].getchildren()
        if len(body_elements) > 1:
            raise Invalid('Only one table is allowed')

        if body_elements[0].tag != 'table':
            raise Invalid('Table is missing')


TableRichTextHandler = RichTextHandler_(TableRichText)


class IEditorRichText(editor.IRichText):
    pass


TableRichTextFactory = FieldFactory(TableRichText, _("Table Rich Text"))
