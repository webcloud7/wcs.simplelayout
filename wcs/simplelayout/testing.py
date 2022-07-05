from ftw.builder.testing import BUILDER_LAYER
from ftw.builder.testing import functional_session_factory
from ftw.builder.testing import set_builder_session_factory
from ftw.referencewidget.tests import widgets
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import login
from plone.app.testing import PLONE_FIXTURE
from plone.app.testing import PloneSandboxLayer
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from plone.app.testing import TEST_USER_NAME
from plone.testing.zope import WSGI_SERVER_FIXTURE
from zope.configuration import xmlconfig
import plone.restapi
import wcs.simplelayout


class SimplelayoutLayer(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE, BUILDER_LAYER)
    def setUpZope(self, app, configurationContext):
        xmlconfig.string(
            '<configure xmlns="http://namespaces.zope.org/zope">'
            '  <include package="plone.autoinclude" file="meta.zcml" />'
            '  <autoIncludePlugins target="plone" />'
            '  <autoIncludePluginsOverrides target="plone" />'
            '</configure>',
            context=configurationContext)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'wcs.simplelayout:default')
        applyProfile(portal, 'plone.restapi:default')

        setRoles(portal, TEST_USER_ID, ['Manager', 'Site Administrator'])
        login(portal, TEST_USER_NAME)


SIMPLELAYOUT_FIXTURE = SimplelayoutLayer()
SIMPLELAYOUT_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(SIMPLELAYOUT_FIXTURE,
           set_builder_session_factory(functional_session_factory)),
    name='Simplelayout:Functional')

SIMPLELAYOUT_FRONTEND_TESTING = FunctionalTesting(
    bases=(SIMPLELAYOUT_FIXTURE,
           WSGI_SERVER_FIXTURE,
           set_builder_session_factory(functional_session_factory)),
    name='Simplelayout:Frontend')
