from copy import deepcopy
from lxml import etree
from plone.app.dexterity.browser.layout import TypeFormLayout
from plone.app.dexterity.browser.modeleditor import NAMESPACE
from plone.app.dexterity.interfaces import ITypeSchemaContext
from plone.base.utils import safe_bytes
from plone.base.utils import safe_text
from plone.registry.field import Text
from plone.registry.interfaces import IRegistry
from plone.registry.record import Record
from Products.statusmessages.interfaces import IStatusMessage
from wcs.simplelayout import _
from z3c.form import button
from z3c.form import field
from z3c.form import form
from zope import schema
from zope.browserpage.viewpagetemplatefile import ViewPageTemplateFile
from zope.component import adapter
from zope.component import getUtility
from zope.interface import implementer
from zope.interface import Interface


class IRowConfiguration(Interface):

    schema_xml = schema.Text(
        title=_("XML Schema for row configuration"),
        required=False,
    )


DEFAULT_SCHEMA = """<?xml version='1.0' encoding='utf8'?>
<model xmlns="http://namespaces.plone.org/supermodel/schema">
<schema>
</schema>
</model>"""


@implementer(IRowConfiguration)
@adapter(ITypeSchemaContext)
class RowConfigurationAdapter:
    def __init__(self, context):
        self.context = context
        self.fti = context.fti
        self.registry = getUtility(IRegistry)
        self.prefix = 'wcs.simplelayout.row_configuration'

    def _get_schema_xml(self):
        name = f'{self.prefix}.{self.fti.id}.row_configuration'
        return self.registry.get(name, DEFAULT_SCHEMA)

    def _set_schema_xml(self, value):
        name = f'{self.prefix}.{self.fti.id}.row_configuration'
        if name not in self.registry:
            title = f'Row configuration for simplelayout content: {self.fti.id}'
            self.registry.records[name] = Record(Text(title=title), value)
        else:
            self.registry[name] = value

    schema_xml = property(
        _get_schema_xml, _set_schema_xml
    )


class RowConfigurationForm(form.EditForm):
    ignoreContext = False
    template = ViewPageTemplateFile("row_configuration.pt")
    label = _("Row configuration")
    description = _("Configure row settings")
    successMessage = _("Row configuration updated.")
    noChangesMessage = _("No changes were made.")
    buttons = deepcopy(form.EditForm.buttons)
    buttons["apply"].title = _("Save")

    @property
    def fields(self):
        return field.Fields(IRowConfiguration)

    def getContent(self):
        return RowConfigurationAdapter(self.context)

    @button.buttonAndHandler(_('Apply'), name='apply')
    def handleApply(self, action):
        data, errors = self.extractData()

        source = safe_bytes(data['schema_xml'])
        parser = etree.XMLParser(resolve_entities=False, remove_pis=True)
        try:
            root = etree.fromstring(source, parser=parser)
        except etree.XMLSyntaxError as e:
            IStatusMessage(self.request).addStatusMessage(
                f"XMLSyntaxError: {safe_text(e.args[0])}",
                "error",
            )
            return

        if root.tag != NAMESPACE + "model":
            IStatusMessage(self.request).addStatusMessage(
                _("Error: root tag must be 'model'"),
                "error",
            )
            return

        for element in root.getchildren():
            if element.tag != NAMESPACE + "schema":
                IStatusMessage(self.request).addStatusMessage(
                    _("Error: all model elements must be 'schema'"),
                    "error",
                )
                return

        data['schema_xml'] = etree.tostring(
                root, pretty_print=True, xml_declaration=True, encoding="utf8"
            ).decode('utf-8')

        if errors:
            self.status = self.formErrorsMessage
            return
        changes = self.applyChanges(data)
        if changes:
            self.status = self.successMessage
        else:
            self.status = self.noChangesMessage


class RowConfigurationPage(TypeFormLayout):
    form = RowConfigurationForm
    label = _("Row configuration")
