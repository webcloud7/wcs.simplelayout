from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from plone import api
from wcs.simplelayout.browser.dexterity.row_configuration import DEFAULT_SCHEMA
from wcs.simplelayout.tests import FunctionalTesting
import json


SAMPLE_ROW_SCHEMA_XML = """<?xml version='1.0' encoding='utf8'?>
<model xmlns="http://namespaces.plone.org/supermodel/schema">
<schema>
    <field name="show_in_right_column" type="zope.schema.Bool">
      <description/>
      <required>False</required>
      <title>Show in right column</title>
    </field>
</schema>
</model>
"""


class TestRowConfiguration(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manager')

    @browsing
    def test_default_row_configuration_in_form(self, browser):
        browser.login().open(self.portal.absolute_url() + '/dexterity-types/ContentPage/@@row_configuration')
        self.assertEqual(
            DEFAULT_SCHEMA,
            browser.css('textarea[name="form.widgets.schema_xml"]')[0].value
        )
    @browsing
    def test_set_row_configuration(self, browser):
        browser.login().open(self.portal.absolute_url() + '/@@dexterity-types/ContentPage')

        link = browser.css('.nav-link')[-1]
        self.assertEqual(
            self.portal.absolute_url() + '/dexterity-types/ContentPage/@@row_configuration',
            link.attrib['href'].replace(':80', '')
        )

        self.assertFalse(api.portal.get_registry_record(
            name='wcs.simplelayout.row_configuration.ContentPage.row_configuration', default=''))

        browser.open(self.portal.absolute_url() + '/dexterity-types/ContentPage/@@row_configuration')
        browser.fill({'Row schema': SAMPLE_ROW_SCHEMA_XML}).submit()

        self.assertEqual(
            SAMPLE_ROW_SCHEMA_XML,
            api.portal.get_registry_record(
                name='wcs.simplelayout.row_configuration.ContentPage.row_configuration', default=''),
        )

    @browsing
    def test_schema_xml_validation(self, browser):
        browser.login().open(self.portal.absolute_url() + '/dexterity-types/ContentPage/@@row_configuration')
        browser.fill({'Row schema': 'invalid xml'}).submit()
        self.assertIn(
            "XMLSyntaxError",
            browser.css('.statusmessage-error').first.text
        )

        browser.open(self.portal.absolute_url() + '/dexterity-types/ContentPage/@@row_configuration')
        browser.fill({'Row schema': '<some xml="test"></some>'}).submit()
        self.assertIn(
            "root tag must be 'model'",
            browser.css('.statusmessage-error').first.text
        )

        browser.open(self.portal.absolute_url() + '/dexterity-types/ContentPage/@@row_configuration')
        browser.fill({'Row schema': '<model xmlns="http://namespaces.plone.org/supermodel/schema"><any>test</any></model>'}).submit()
        self.assertIn(
            "all model elements must be 'schema'",
            browser.css('.statusmessage-error').first.text
        )
