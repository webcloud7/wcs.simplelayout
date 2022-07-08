from plone import api
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from zope.publisher.browser import BrowserView


class SimplelayoutView(BrowserView):
    template = ViewPageTemplateFile('templates/simplelayout.pt')

    def __call__(self):
        return self.template()

    def can_modify(self):
        return api.user.has_permission('Modify portal content')
