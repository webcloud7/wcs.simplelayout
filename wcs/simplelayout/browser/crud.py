from plone.dexterity.browser.add import DefaultAddForm
from plone.dexterity.browser.add import DefaultAddView
from plone.dexterity.browser.edit import DefaultEditForm
from plone.dexterity.events import EditCancelledEvent
from plone.dexterity.events import EditFinishedEvent
from plone.dexterity.i18n import MessageFactory as DXMF
from plone.dexterity.interfaces import IDexterityFTI
from plone.dexterity.utils import addContentToContainer
from plone.restapi.interfaces import ISerializeToJson
from Products.CMFCore.interfaces import ITypesTool
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from z3c.form import button
from zope.component import adapter
from zope.component import getMultiAdapter
from zope.component import getUtility
from zope.event import notify
from zope.interface import implementer
from zope.interface import Interface
from zope.location.interfaces import LocationError
from zope.traversing.interfaces import ITraversable
import json


@implementer(ITraversable)
@adapter(ISimplelayout, Interface)
class AddViewTraverser(object):
    """Add view traverser.
    """

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def traverse(self, name, ignored):
        ttool = getUtility(ITypesTool)
        ti = ttool.getTypeInfo(name)
        if ti is not None:
            add_view = AddView(self.context, self.request, ti)
            if add_view is not None:
                add_view.__name__ = ti.factory
                return add_view

        raise LocationError(self.context, name)


class AddForm(DefaultAddForm):

    def add(self, obj):

        fti = getUtility(IDexterityFTI, name=self.portal_type)
        new_object = addContentToContainer(self.container, obj)

        if fti.immediate_view:
            self.immediate_view = "/".join(
                [self.container.absolute_url(), new_object.id, fti.immediate_view]
            )
        else:
            self.immediate_view = "/".join(
                [self.container.absolute_url(), new_object.id]
            )

        self.obj = new_object

    def render(self):
        if self._finishedAdd:
            api_view = getMultiAdapter((self.obj, self.request), ISerializeToJson)
            self.request.response.setHeader('Content-Type', 'application/json')
            self.request.response.setHeader('X-Theme-Disabled', 'True')
            return json.dumps(api_view())
        return super(AddForm, self).render()


class AddView(DefaultAddView):
    form = AddForm

    def render(self):
        if self.form_instance._finishedAdd:
            return self.form_instance.render()
        else:
            return super().render()


class EditForm(DefaultEditForm):

    _finished_edit = False

    @button.buttonAndHandler(DXMF(u'Save'), name='save')
    def handleApply(self, action):
        data, errors = self.extractData()
        if errors:
            self.status = self.formErrorsMessage
            return
        self.applyChanges(data)

        notify(EditFinishedEvent(self.context))
        self._finished_edit = True

    @button.buttonAndHandler(DXMF(u'Cancel'), name='cancel')
    def handleCancel(self, action):
        notify(EditCancelledEvent(self.context))

    def render(self):
        if self._finished_edit:
            api_view = getMultiAdapter((self.context, self.request), ISerializeToJson)
            self.request.response.setHeader('Content-Type', 'application/json')
            self.request.response.setHeader('X-Theme-Disabled', 'True')
            return json.dumps(api_view())
        return super().render()
