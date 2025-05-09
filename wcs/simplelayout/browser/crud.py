from Acquisition import aq_inner, aq_parent
from plone.app.content.browser.actions import DeleteConfirmationForm
from plone.dexterity.browser.add import DefaultAddForm
from plone.dexterity.browser.add import DefaultAddView
from plone.dexterity.browser.edit import DefaultEditForm
from plone.dexterity.events import EditCancelledEvent
from plone.dexterity.events import EditFinishedEvent
from plone.dexterity.i18n import MessageFactory as DXMF
from plone.dexterity.interfaces import IDexterityEditForm
from plone.dexterity.interfaces import IDexterityFTI
from plone.dexterity.utils import addContentToContainer
from plone.restapi.interfaces import ISerializeToJson
from plone.z3cform import layout
from Products.CMFCore.interfaces import ITypesTool
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from z3c.form import button
from zope.component import adapter
from zope.component import getMultiAdapter
from zope.component import getUtility
from zope.event import notify
from zope.interface import classImplements
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

    def enable_unload_protection(self):
        return False

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
            self.request.set('BODY', '')
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

    def enable_unload_protection(self):
        return False

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
            self.request.set('BODY', '')
            return json.dumps(api_view())
        return super().render()


class SimplelayoutFormWrapper(layout.FormWrapper):

    def render(self):
        if self.form_instance._finished_edit:
            return self.contents
        return super().render()


EditView = layout.wrap_form(EditForm, __wrapper_class=SimplelayoutFormWrapper)
classImplements(EditView, IDexterityEditForm)


_no_content_marker = object()


class BlockDeleteConfirmationForm(DeleteConfirmationForm):

    @button.buttonAndHandler(DXMF("Delete"), name="Delete")
    def handle_delete(self, action):
        parent = aq_parent(aq_inner(self.context))
        # has the context object been acquired from a place it should not have
        # been?
        if self.context.aq_chain == self.context.aq_inner.aq_chain:
            parent.manage_delObjects(self.context.getId())

        self.request.response.setHeader('Content-Type', 'application/json')
        self.request.response.setHeader('X-Theme-Disabled', 'True')
        self.request.response.setStatus(204)
        return _no_content_marker

    @button.buttonAndHandler(DXMF("label_cancel", default="Cancel"), name="Cancel")
    def handle_cancel(self, action):
        target = self.view_url()
        return self.request.response.redirect(target)
