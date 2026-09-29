from plone import api
from plone.dexterity.interfaces import IDexterityFTI
from plone.protect.interfaces import IDisableCSRFProtection
from plone.restapi.deserializer import json_body
from plone.restapi.services import Service
from wcs.simplelayout.browser.dexterity.row_configuration import get_row_schema
from wcs.simplelayout.browser.dexterity.row_configuration import normalize_row_schema
from wcs.simplelayout.browser.dexterity.row_configuration import set_row_schema
from zExceptions import BadRequest
from zExceptions import NotFound
from zope.component import queryUtility
from zope.i18n import translate
from zope.interface import alsoProvides
from zope.interface import implementer
from zope.publisher.interfaces import IPublishTraverse


@implementer(IPublishTraverse)
class RowConfigurationService(Service):
    """Row schema (supermodel XML) of a content type:
    ``@row-configuration/<portal_type>``.
    """

    def __init__(self, context, request):
        super().__init__(context, request)
        self.params = []

    def publishTraverse(self, request, name):
        self.params.append(name)
        return self

    @property
    def portal_type(self):
        if len(self.params) != 1:
            raise BadRequest('Expected the content type: @row-configuration/<portal_type>')
        portal_type = self.params[0]
        if queryUtility(IDexterityFTI, name=portal_type) is None:
            raise NotFound(f'Unknown content type: {portal_type}')
        return portal_type


class RowConfigurationGet(RowConfigurationService):

    def reply(self):
        portal_type = self.portal_type
        return {
            '@id': f'{api.portal.get().absolute_url()}/@row-configuration/{portal_type}',
            'portal_type': portal_type,
            'schema': get_row_schema(portal_type),
        }


class RowConfigurationPatch(RowConfigurationService):

    def reply(self):
        alsoProvides(self.request, IDisableCSRFProtection)
        portal_type = self.portal_type
        schema_xml = json_body(self.request).get('schema')
        if not schema_xml:
            raise BadRequest('Missing "schema" (supermodel XML)')
        try:
            set_row_schema(portal_type, normalize_row_schema(schema_xml))
        except ValueError as error:
            raise BadRequest(translate(error.args[0], context=self.request))
        return self.reply_no_content()
