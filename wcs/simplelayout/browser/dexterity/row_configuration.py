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


def get_row_schema(portal_type):
    """Returns the row schema (supermodel XML) of a content type."""
    registry = getUtility(IRegistry)
    return registry.get(_record_name(portal_type), DEFAULT_SCHEMA)


def set_row_schema(portal_type, schema_xml):
    """Stores the row schema of a content type, creating its registry record."""
    registry = getUtility(IRegistry)
    name = _record_name(portal_type)
    if name not in registry:
        title = f'Row configuration for simplelayout content: {portal_type}'
        registry.records[name] = Record(Text(title=title), schema_xml)
    else:
        registry[name] = schema_xml


def _record_name(portal_type):
    return f'wcs.simplelayout.row_configuration.{portal_type}.row_configuration'


def normalize_row_schema(schema_xml):
    """Validates a row schema and returns it pretty printed.

    Raises a ValueError with the reason if the XML is not a supermodel
    model with schema elements only.
    """
    parser = etree.XMLParser(resolve_entities=False, remove_pis=True)
    try:
        root = etree.fromstring(safe_bytes(schema_xml), parser=parser)
    except etree.XMLSyntaxError as e:
        raise ValueError(f"XMLSyntaxError: {safe_text(e.args[0])}")

    if root.tag != NAMESPACE + "model":
        raise ValueError(_("Error: root tag must be 'model'"))

    for element in root.getchildren():
        if element.tag != NAMESPACE + "schema":
            raise ValueError(_("Error: all model elements must be 'schema'"))

    return etree.tostring(
        root, pretty_print=True, xml_declaration=True, encoding="utf8"
    ).decode('utf-8')


@implementer(IRowConfiguration)
@adapter(ITypeSchemaContext)
class RowConfigurationAdapter:
    def __init__(self, context):
        self.context = context
        self.fti = context.fti

    def _get_schema_xml(self):
        return get_row_schema(self.fti.id)

    def _set_schema_xml(self, value):
        set_row_schema(self.fti.id, value)

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

        try:
            data['schema_xml'] = normalize_row_schema(data['schema_xml'])
        except ValueError as error:
            IStatusMessage(self.request).addStatusMessage(error.args[0], "error")
            return

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
