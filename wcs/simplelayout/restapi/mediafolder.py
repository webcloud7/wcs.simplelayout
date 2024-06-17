from plone.restapi.services import Service
from wcs.simplelayout.browser.mediafolder import CreateMediaFolderMixin
from plone.protect.interfaces import IDisableCSRFProtection
from zope.interface import alsoProvides


class CreateAndLinkMediaFolderEndpoint(CreateMediaFolderMixin, Service):

    def reply(self):
        alsoProvides(self.request, IDisableCSRFProtection)
        mediafolder = self.create_mediafolder()
        return {'@id': mediafolder.absolute_url()}
