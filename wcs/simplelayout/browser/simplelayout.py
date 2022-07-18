from plone import api
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from wcs.simplelayout import _
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
        return api.user.has_permission('Modify portal content')

    def i18n(self):
        messages = {
            'Actions': self._translate(_('label_actions', default='Actions')),
            'Add': self._translate(_('label_add', default='Add')),
            'Edit': self._translate(_('label_edit', default='Edit')),
            'Delete': self._translate(_('label_delete', default='Delete')),
            'Upload': self._translate(_('label_upload', default='Upload')),
            'Information': self._translate(_('label_information', default='Information')),
            'Contents (Listing)': self._translate(_('label_contents', default='Contents (Listing)')),
        }
        return json.dumps(messages)
