from plone import api
from plone.registry.interfaces import IRegistry
from Products.CMFPlone.resources.webresource import PloneScriptResource
from Products.CMFPlone.resources.webresource import PloneStyleResource
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from wcs.simplelayout import _
from wcs.simplelayout.utils import get_block_types
from zope.component import getUtility
from zope.i18n import translate
from zope.publisher.browser import BrowserView
import json


class SimplelayoutView(BrowserView):
    template = ViewPageTemplateFile('templates/simplelayout.pt')

    def __call__(self):
        return self.template()

    def _translate(self, msg):
        return translate(msg, context=self.request)

    def can_modify(self):
        return api.user.has_permission('Modify portal content', obj=self.context)

    def can_edit_columns(self):
        return api.user.has_permission('wcs.simplelayout: Manage columns', obj=self.context)

    def can_add_blocks(self):
        return api.user.has_permission('wcs.simplelayout: Add Block', obj=self.context)

    def i18n(self):
        messages = {
            'Actions': self._translate(_('label_actions', default='Actions')),
            'Add': self._translate(_('label_add', default='Add')),
            'Edit': self._translate(_('label_edit', default='Edit')),
            'Delete': self._translate(_('label_delete', default='Delete')),
            'Upload': self._translate(_('label_upload', default='Upload')),
            'Information': self._translate(_('label_information', default='Information')),
            'Contents (Listing)': self._translate(_('label_contents', default='Contents (Listing)')),
            'Remove': self._translate(_('label_remove', default='Remove')),
            'Remove column': self._translate(_('label_remove_col', default='Remove column')),
            '2-column row (50%)': self._translate(_('label_two_col', default='2-column row (50%)')),
            '3-column row (33%)': self._translate(_('label_three_col', default='3-column row (33%)')),
            '4-column row (25%)': self._translate(_('label_four_col', default='4-column row (25%)')),
            'Width': self._translate(_('label_width', default='Width')),
            'E-Mail': self._translate(_('label_email', default='E-Mail')),
            'Departement': self._translate(_('label_department', default='Departement')),
            'Organization': self._translate(_('label_organization', default='Organization')),
            'Function': self._translate(_('label_function', default='Function')),
            'Address': self._translate(_('label_address', default='Address')),
            'Referenced content': self._translate(_('label_ref_content', default='Referenced content')),
            'No referenced content found': self._translate(_('label_no_ref_content', default='No referenced content found')),
            'Links to a internal or external target': self._translate(_('label_link_target', default='Links to a internal or external target')),
            'Go to content': self._translate(_('label_got_to', default='Go to content')),
            '(hidden title)': self._translate(_('label_hidden_title', default='(hidden title)')),
            'View': self._translate(_('label_view', default='View')),
            'Go the the referenced Media Folder': self._translate(_('label_go_to_mediafolder', default='Go the the referenced Media Folder')),
            'Click here to create a new Media Folder': self._translate(_('label_create_mediafolder', default='Click here to create a new Media Folder')),
            'Organsation': self._translate(_('label_organisation', default='Organisation')),
            'Website': self._translate(_('label_website', default='Website')),
            'Office': self._translate(_('label_phone_office', default='Office')),
            'Opening hours': self._translate(_('label_opening_hours', default='Opening hours')),
            'Mo': self._translate(_('label_monday_short', default='Mo')),
            'Tu': self._translate(_('label_tuesday_short', default='Tu')),
            'We': self._translate(_('label_wednesday_short', default='We')),
            'Th': self._translate(_('label_thursday_short', default='Th')),
            'Fr': self._translate(_('label_friday_short', default='Fr')),
            'Sa': self._translate(_('label_saturday_short', default='Sa')),
            'Su': self._translate(_('label_sunday_short', default='Su')),
            'Closed': self._translate(_('label_closed', default='Closed')),
            'Close': self._translate(_('label_close', default='Close')),
            'Validity': self._translate(_('label_validity', default='Validity')),
        }
        return json.dumps(messages)

    def custom_templates(self):
        templates = {}
        prefix = 'wcs.backend.block_template'
        registry = getUtility(IRegistry)
        for fti in get_block_types():
            template_record_name = f'{prefix}.{fti.id}.template'
            replace_record_name = f'{prefix}.{fti.id}.replace'
            if template_record_name in registry:
                templates[fti.id] = {
                    'template': registry[template_record_name],
                    'replace': registry.get(replace_record_name, False)
                }
        return json.dumps(templates)

    def script_resource(self):
        resource = PloneScriptResource(
            context=self.context,
            name="simplelayout",
            depends="",
            resource='++resource++simplelayout/js/dist/simplelayout.umd.js',
            include=True,
            unique=True,
            integrity=True,
        )
        return resource.render(base_url=api.portal.get().absolute_url())

    def style_resource(self):
        resource = PloneStyleResource(
            context=self.context,
            name="simplelayout",
            depends="",
            resource='++resource++simplelayout/js/dist/style.css',
            include=True,
            media="all",
            unique=True,
            rel="stylesheet",
        )
        return resource.render(base_url=api.portal.get().absolute_url())
