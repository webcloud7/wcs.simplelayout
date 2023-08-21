from copy import deepcopy
from plone.app.dexterity.browser.layout import TypeFormLayout
from plone.app.dexterity.interfaces import ITypeSchemaContext
from plone.registry.field import Text, Bool
from plone.registry.interfaces import IRegistry
from plone.registry.record import Record
from wcs.simplelayout import _
from z3c.form import field
from z3c.form import form
from zope import schema
from zope.browserpage.viewpagetemplatefile import ViewPageTemplateFile
from zope.component import adapter
from zope.component import getUtility
from zope.interface import implementer
from zope.interface import Interface


class IBlockTemplateSettings(Interface):

    replace = schema.Bool(
        title=_("Replace block representation"),
        description=_("If false (unchecked), the code will be appended to the existing block representation."),
        required=False,
        default=False,
    )

    template = schema.Text(
        title=_("VueJS Template Code"),
        required=False,
    )


@implementer(IBlockTemplateSettings)
@adapter(ITypeSchemaContext)
class TypeBlockTemplateAdapter:
    def __init__(self, context):
        self.context = context
        self.fti = context.fti
        self.registry = getUtility(IRegistry)
        self.prefix = 'wcs.backend.block_template'

    def _get_template(self):
        name = f'{self.prefix}.{self.fti.id}.template'
        return self.registry.get(name, '')

    def _set_template(self, value):
        name = f'{self.prefix}.{self.fti.id}.template'
        if name not in self.registry:
            title = f'Custom Block template for FTI: {self.fti.id}'
            self.registry.records[name] = Record(Text(title=title), value)
        else:
            self.registry[name] = value

    def _get_replace(self):
        name = f'{self.prefix}.{self.fti.id}.replace'
        return self.registry.get(name, False)

    def _set_replace(self, value):
        name = f'{self.prefix}.{self.fti.id}.replace'
        if name not in self.registry:
            title = f'Custom Block template for FTI: {self.fti.id}'
            self.registry.records[name] = Record(Bool(title=title), value)
        else:
            self.registry[name] = value

    template = property(
        _get_template, _set_template
    )
    replace = property(
        _get_replace, _set_replace
    )


class BlockTemplateForm(form.EditForm):
    ignoreContext = False
    template = ViewPageTemplateFile("block_template.pt")
    label = _("Block Template")
    description = _("Change the visual representation of a Block")
    successMessage = _("Block representation updated.")
    noChangesMessage = _("No changes were made.")
    buttons = deepcopy(form.EditForm.buttons)
    buttons["apply"].title = _("Save")

    @property
    def fields(self):
        return field.Fields(IBlockTemplateSettings)

    def getContent(self):
        return TypeBlockTemplateAdapter(self.context)


class BlockTemplatePage(TypeFormLayout):
    form = BlockTemplateForm
    label = _("Block Template")
