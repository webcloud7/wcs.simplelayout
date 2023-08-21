from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from plone import api
from wcs.simplelayout.tests import FunctionalTesting
import json


class TestCustomBlockTemplateStorage(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manager')

    @browsing
    def test_set_custom_block_template(self, browser):
        browser.exception_bubbling = True
        browser.login().open(self.portal.absolute_url() + '/@@dexterity-types/Block')

        link = browser.css('.nav-link')[-1]
        self.assertEqual(
            self.portal.absolute_url() + '/dexterity-types/Block/@@block_template',
            link.attrib['href'].replace(':80', '')
        )

        self.assertFalse(api.portal.get_registry_record(
            name='wcs.backend.block_template.Block.template', default=False))

        browser.open(self.portal.absolute_url() + '/dexterity-types/Block/@@block_template')
        browser.fill({'VueJS Template Code': 'Hello World!'}).submit()

        self.assertEqual(
            api.portal.get_registry_record(name='wcs.backend.block_template.Block.template', default=False),
            'Hello World!'
        )


class TestAddCustomTemplateToApp(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manager')
        self.page = create(Builder('content page').titled('A Page'))

    @browsing
    def test_custom_code_for_simplelayout_app(self, browser):
        browser.login().open(self.portal.absolute_url() + '/dexterity-types/Block/@@block_template')
        browser.fill({'VueJS Template Code': 'Hello World!'}).submit()

        browser.login().visit(self.page)
        self.assertEqual(
            {
                'Block': {
                    'template': 'Hello World!',
                    'replace': False,
                }
            },
            json.loads(browser.css('.simplelayout-app').first.attrib['data-custom-templates'])
        )
