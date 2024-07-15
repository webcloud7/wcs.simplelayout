from plone import api
from plone.app.content.browser.folderfactories import _allowedTypes
from plone.autoform.form import AutoExtensibleForm
from plone.supermodel import loadString
from plone.z3cform import layout
from Products.CMFCore.Expression import Expression
from Products.CMFCore.Expression import getExprContext
from Products.CMFPlone.interfaces.constrains import IConstrainTypes
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from wcs.simplelayout import _
from wcs.simplelayout.browser.dexterity.row_configuration import DEFAULT_SCHEMA
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.utils import get_block_types
from z3c.form import button
from z3c.form import field
from z3c.form import form
from z3c.form.form import applyChanges
from z3c.form.interfaces import IDataManager
from z3c.form.interfaces import IManagerValidator
from zExceptions import BadRequest
from zope.component import adapter
from zope.component import queryMultiAdapter
from zope.i18n import translate
from zope.interface import implementer
from zope.interface import Interface
from zope.publisher.browser import BrowserView
from zope.publisher.interfaces import IPublishTraverse
import json


class AddableBlocks(BrowserView):
    template = ViewPageTemplateFile('templates/addable-blocks-overlay.pt')

    def __call__(self):
        return self.template()

    def addable_blocks(self):
        block_types = get_block_types()
        allowed_types = self._addable_types()

        for fti in block_types:
            if fti in allowed_types:
                add_url = Expression(fti.add_view_expr)(
                    getExprContext(self.context, self.context))
                add_url = add_url.replace('++add++', '++add_block++')
                yield {
                    'title': translate(msgid=fti.Title(),
                                       domain=fti.i18n_domain,
                                       context=self.request),
                    'description': translate(msgid=fti.Description(),
                                             domain=fti.i18n_domain,
                                             context=self.request),
                    'add_url': add_url,
                }

    def _addable_types(self):
        allowed_types = _allowedTypes(self.request, self.context)
        constrain = IConstrainTypes(self.context, None)
        if constrain is None:
            return allowed_types
        else:
            locally_allowed = constrain.getLocallyAllowedTypes()
            return [fti for fti in allowed_types
                    if fti.getId() in locally_allowed]


class EditRowForm(form.EditForm):
    ignoreContext = False
    row = 0
    _return_json = False

    @property
    def label(self):
        return _('Edit row ${row}', mapping={'row': self.row + 1})

    @property
    def fields(self):
        fti_name = self.context.portal_type
        name = f'wcs.simplelayout.row_configuration.{fti_name}.row_configuration'
        schema_xml = api.portal.get_registry_record(name, default=DEFAULT_SCHEMA)
        schema = loadString(schema_xml).schema
        return field.Fields(schema)

    def getContent(self):
        page = ISimplelayout(self.context)
        layouts = page.slblocks_layout
        if len(layouts['items']) < self.row + 1:
            raise BadRequest('Invalid row number')

        row = layouts['items'][self.row]
        data = row.get('data', {})
        return data

    def applyChanges(self, data):
        content = self.getContent()
        changes = applyChanges(self, content, data)
        # ``changes`` is a dictionary; if empty, there were no changes
        if changes:
            page = ISimplelayout(self.context)
            layouts = page.slblocks_layout
            row = layouts['items'][self.row]
            if 'data' in row:
                row['data'].update(content)
            else:
                row['data'] = content
            self._save_layout(page, layouts)
        return changes

    @button.buttonAndHandler(_('Save'), name='save')
    def handleApply(self, action):
        data, errors = self.extractData()
        if errors:
            self.status = self.formErrorsMessage
            return
        changes = self.applyChanges(data)
        self._return_json = True
        return changes

    def _save_layout(self, page, layouts):
        dm = queryMultiAdapter((page, ISimplelayout.get('slblocks_layout')), IDataManager)
        validator = queryMultiAdapter(
            (page, page.REQUEST, None, ISimplelayout, None), IManagerValidator
        )
        if validator.validate(layouts):
            raise Exception('Validation error')
        dm.set(layouts)


@implementer(IPublishTraverse)
class EditRowFormView(layout.FormWrapper):
    form = EditRowForm

    def __init__(self, context, request):
        super().__init__(context, request)
        self.request["disable_border"] = True

    def publishTraverse(self, request, name):
        self.form_instance.row = int(name)
        return self

    def render(self):
        if self.form_instance._return_json:
            return self._json_response(self.form_instance.getContent())
        return super().render()

    def _json_response(self, data):
        self.request.response.setHeader('Content-Type', 'application/json')
        self.request.response.setHeader('X-Theme-Disabled', 'True')
        self.request.set('BODY', '')
        return json.dumps(data)
