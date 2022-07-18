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
            'Remove': self._translate(_('label_remove', default='Remove')),
            'Remove column': self._translate(_('label_remove_col', default='Remove column')),
            '2-column row (50%)': self._translate(_('label_two_col', default='2-column row (50%)')),
            '3-column row (33%)': self._translate(_('label_three_col', default='3-column row (33%)')),
            '4-column row (25%)': self._translate(_('label_four_col', default='4-column row (25%)')),
            'Width': self._translate(_('label_width', default='Width')),
        }
        return json.dumps(messages)
