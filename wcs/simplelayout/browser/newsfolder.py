from plone import api
from plone.base.batch import Batch
from plone.i18n.normalizer.interfaces import IIDNormalizer
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from wcs.simplelayout.utils import add_sort_limit_to_query
from zope.component import queryUtility
from zope.publisher.browser import BrowserView


class NewsFolderView(BrowserView):
    template = ViewPageTemplateFile('templates/newsfolderview.pt')

    batch_size = 10

    def __init__(self, context, request):
        super().__init__(context, request)
        self.batch_size = self.request.form.get('b_size', self.batch_size)

    def __call__(self):
        return self.template()

    def get_query(self):
        query = {
            'object_provides': 'wcs.simplelayout.contenttypes.behaviors.INews',
            'sort_on': 'Date',
            'sort_order': 'reverse',
            'path': '/'.join(self.context.getPhysicalPath())
        }
        add_sort_limit_to_query(query)

        return query

    def format_date(self, date):
        return self.context.toLocalizedTime(date, long_format=False)

    def review_state_class(self, state):
        return "state-" + queryUtility(IIDNormalizer).normalize(
            state,
        )

    def get_items(self):
        catalog = api.portal.get_tool('portal_catalog')
        query = self.get_query()
        return catalog(**query)

    def batch(self):
        b_start = self.request.form.get('b_start', 0)
        return Batch(self.get_items(), self.batch_size, b_start)
