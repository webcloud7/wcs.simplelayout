from AccessControl.requestmethod import postonly
from Acquisition import aq_inner
from operator import attrgetter
from plone import api
from plone.app.layout.viewlets.common import ViewletBase
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from uuid import uuid4
from wcs.simplelayout.contenttypes.fix_set_relations import add_behavior_relations
from z3c.relationfield import RelationValue
from zc.relation.interfaces import ICatalog
from zope.component import getUtility
from zope.i18n import translate
from zope.intid.interfaces import IIntIds
from zope.publisher.browser import BrowserView


class MediaFolderView(BrowserView):

    def __call__(self):
        base_url = self.context.absolute_url()
        can_list_contents = api.user.has_permission('List folder contents', obj=self.context)
        if api.user.is_anonymous() or not can_list_contents:
            return self.request.RESPONSE.redirect(base_url + '/@@view')
        else:
            return self.request.RESPONSE.redirect(base_url + '/@@folder_contents')


class CreateMediaFolderMixin:
    def create_mediafolder(self):
        container = self.context.aq_parent

        try:
            from wcs.backend.staging.interfaces import IStaging
            staging = IStaging(container)
            if staging.is_working_copy():
                container = staging.get_baseline()
        except ImportError:
            pass

        mediafolder = api.content.create(
            type='MediaFolder',
            title=self.context.title_or_id(),
            id=uuid4().hex,
            container=container)

        intids = getUtility(IIntIds)
        relation = RelationValue(intids.getId(mediafolder))
        self.context.mediafolder = relation
        add_behavior_relations(self.context, None)

        try:
            from wcs.backend.utils import PRIVATE_STATE
            from wcs.backend.utils import PUBLISHED_STATE
            wf_tool = api.portal.get_tool('portal_workflow')
            container_state = wf_tool.getInfoFor(container, 'review_state')
            if container_state == PUBLISHED_STATE:
                wf_tool.doActionFor(mediafolder, 'mediafolder_workflow--TRANSITION--veroffentlichen--entwurf_veroffentlicht')
            elif container_state == PRIVATE_STATE:
                wf_tool.doActionFor(mediafolder, 'mediafolder_workflow--TRANSITION--privat-schalten--entwurf_privat')
        except ImportError:
            pass

        return mediafolder 


class CreateAndLinkMediaFolder(BrowserView, CreateMediaFolderMixin):

    @postonly
    def __call__(self, REQUEST):
        mediafolder = self.create_mediafolder()
        url = mediafolder.absolute_url() + '/folder_contents'
        return self.request.RESPONSE.redirect(url)


class MediaFolderViewlet(ViewletBase):
    index = ViewPageTemplateFile("templates/media_folder_viewlet.pt")

    def update(self):
        super(MediaFolderViewlet, self).update()
        self.listingblocks = self.get_referenced_listingblocks()

    def _get_dx_brefs_for(self):
        catalog = getUtility(ICatalog)
        obj_intid = getUtility(IIntIds).getId(aq_inner(self.context))
        relations = catalog.findRelations({'to_id': obj_intid})
        return map(attrgetter('from_object'), relations)

    def get_referenced_listingblocks(self):
        objs = self._get_dx_brefs_for()
        objs = filter(lambda item: bool(item), objs)
        result = []
        for obj in objs:
            result.append(
                {
                    'title': obj.Title(),
                    'url': obj.aq_parent.absolute_url() + '#' + obj.getId(),
                    'review_state': self._get_review_state(obj)
                }
            )
        return result

    def _get_review_state(self, obj):
        parent = obj.aq_parent
        wftool = api.portal.get_tool('portal_workflow')
        state_id = wftool.getInfoFor(parent, 'review_state', default=None)
        if state_id is None:
            return ''
        translated_state_title = translate(state_id, context=self.request, domain='plone')
        return u'<span class="state-{}">{}</span>'.format(
            state_id,
            translated_state_title
        )
        return ''
