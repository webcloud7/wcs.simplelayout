from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from plone import api
from plone.app.testing import logout
from wcs.simplelayout.browser.dexterity.row_configuration import DEFAULT_SCHEMA
from wcs.simplelayout.tests import FunctionalTesting
from wcs.simplelayout.tests.test_row_configuration import SAMPLE_ROW_SCHEMA_XML
import json
import transaction


RECORD = 'wcs.simplelayout.row_configuration.ContentPage.row_configuration'


class TestRowConfigurationEndpoint(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manager')
        self.endpoint_url = f'{self.portal.absolute_url()}/@row-configuration/ContentPage'

    def patch(self, browser, payload):
        browser.open(
            self.endpoint_url,
            method='PATCH',
            data=json.dumps(payload),
            headers=self.api_headers,
        )

    @browsing
    def test_get_returns_the_empty_default_schema_when_none_is_stored(self, browser):
        browser.login().open(self.endpoint_url, headers=self.api_headers)
        result = browser.json

        self.assertEqual(self.endpoint_url, result['@id'].replace(':80', ''))
        self.assertEqual('ContentPage', result['portal_type'])
        self.assertEqual(DEFAULT_SCHEMA, result['schema'])

    @browsing
    def test_patch_creates_the_registry_record(self, browser):
        self.assertIsNone(
            api.portal.get_registry_record(name=RECORD, default=None),
            'Expected no row configuration record before the first PATCH',
        )

        self.patch(browser.login(), {'schema': SAMPLE_ROW_SCHEMA_XML})

        self.assertEqual(204, browser.status_code, 'Expected no content')
        self.assertEqual(SAMPLE_ROW_SCHEMA_XML, api.portal.get_registry_record(name=RECORD))

    @browsing
    def test_patch_replaces_a_stored_schema_and_get_returns_it(self, browser):
        self.patch(browser.login(), {'schema': DEFAULT_SCHEMA})
        self.patch(browser, {'schema': SAMPLE_ROW_SCHEMA_XML})

        browser.open(self.endpoint_url, headers=self.api_headers)
        self.assertEqual(SAMPLE_ROW_SCHEMA_XML, browser.json['schema'])

    @browsing
    def test_patch_rejects_invalid_schemas(self, browser):
        browser.login()
        cases = {
            'invalid xml': 'XMLSyntaxError',
            '<some xml="test"></some>': "root tag must be 'model'",
            (
                '<model xmlns="http://namespaces.plone.org/supermodel/schema">'
                '<any>test</any></model>'
            ): "all model elements must be 'schema'",
        }
        for schema_xml, reason in cases.items():
            with browser.expect_http_error(code=400):
                self.patch(browser, {'schema': schema_xml})
            self.assertIn(reason, browser.json['message'], f'Expected the reason for: {schema_xml}')

        self.assertIsNone(
            api.portal.get_registry_record(name=RECORD, default=None),
            'Expected invalid schemas not to be stored',
        )

    @browsing
    def test_patch_rejects_schemas_the_row_form_could_not_load(self, browser):
        browser.login()
        unknown_field_type = (
            '<model xmlns="http://namespaces.plone.org/supermodel/schema"><schema>'
            '<field name="x" type="does.not.Exist"><title>X</title></field>'
            '</schema></model>'
        )
        with browser.expect_http_error(code=400):
            self.patch(browser, {'schema': unknown_field_type})
        self.assertIn('Invalid schema', browser.json['message'], 'Expected the reason')

        self.assertIsNone(
            api.portal.get_registry_record(name=RECORD, default=None),
            'Expected schemas that break the row form not to be stored',
        )

    @browsing
    def test_patch_without_schema_is_a_bad_request(self, browser):
        with browser.expect_http_error(code=400):
            self.patch(browser.login(), {})

    @browsing
    def test_unknown_content_type_is_not_found(self, browser):
        with browser.expect_http_error(code=404):
            browser.login().open(
                f'{self.portal.absolute_url()}/@row-configuration/DoesNotExist',
                headers=self.api_headers,
            )

    @browsing
    def test_anonymous_can_neither_read_nor_change_the_schema(self, browser):
        logout()
        transaction.commit()

        with browser.expect_unauthorized():
            browser.open(self.endpoint_url, headers=self.api_headers)
        with browser.expect_unauthorized():
            self.patch(browser, {'schema': SAMPLE_ROW_SCHEMA_XML})

    @browsing
    def test_row_editing_is_enabled_after_patching_a_schema(self, browser):
        page = create(Builder('content page').titled('A Page'))
        self.patch(browser.login(), {'schema': SAMPLE_ROW_SCHEMA_XML})

        browser.visit(page)
        self.assertEqual(
            'True',
            browser.css('.simplelayout-app').first.attrib['data-can-edit-row-data'],
        )
