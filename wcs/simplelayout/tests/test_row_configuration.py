from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from plone import api
from plone.registry.field import Text
from plone.registry.interfaces import IRegistry
from plone.registry.record import Record
from wcs.simplelayout.browser.dexterity.row_configuration import DEFAULT_SCHEMA
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.tests import FunctionalTesting
from zExceptions import BadRequest
from zope.component import getUtility
import json
import transaction


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
        browser.fill(
            {'Row schema': ('<model xmlns="http://namespaces.plone.org/supermodel/schema">'
                            '<any>test</any></model>')}).submit()
        self.assertIn(
            "all model elements must be 'schema'",
            browser.css('.statusmessage-error').first.text
        )

    @browsing
    def test_simplelayout_can_edit_row_data(self, browser):
        page = create(Builder('content page').titled('A Page'))
        browser.login().visit(page)
        self.assertEqual(
            'False',
            browser.css('.simplelayout-app').first.attrib['data-can-edit-row-data']
        )

        browser.open(self.portal.absolute_url() + '/dexterity-types/ContentPage/@@row_configuration')
        browser.fill({'Row schema': SAMPLE_ROW_SCHEMA_XML}).submit()

        browser.visit(page)
        self.assertEqual(
            'True',
            browser.css('.simplelayout-app').first.attrib['data-can-edit-row-data']
        )


class TestEditRowForm(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manager')

        self.page = create(Builder('content page').titled('A Page'))
        self.layout = {
            'items': [
                {
                    '@type': 'row',
                    'items': [
                        {
                            '@type': 'col',
                            'items': [],
                            'width': '12'
                        },
                    ]
                },
                {
                    '@type': 'row',
                    'items': [
                        {
                            '@type': 'col',
                            'items': [],
                            'width': '12'
                        },
                    ]
                },
            ]
        }

        registry = getUtility(IRegistry)
        name = 'wcs.simplelayout.row_configuration.ContentPage.row_configuration'
        registry.records[name] = Record(Text(title='Row configuration'), DEFAULT_SCHEMA)
        api.portal.set_registry_record(name, SAMPLE_ROW_SCHEMA_XML)
        transaction.commit()

    @browsing
    def test_row_edit_form_no_layout(self, browser):
        browser.login().open(self.page.absolute_url() + '/@@edit-row/0')
        self.assertEqual(200, browser.status_code)

    @browsing
    def test_row_edit_form_row_not_there(self, browser):
        ISimplelayout(self.page).slblocks_layout = self.layout.copy()
        transaction.commit()

        browser.login().open(self.page.absolute_url() + '/@@edit-row/0')
        self.assertEqual(200, browser.status_code)
        browser.login().open(self.page.absolute_url() + '/@@edit-row/1')
        self.assertEqual(200, browser.status_code)

        with browser.expect_http_error(code=400):
            browser.login().open(self.page.absolute_url() + '/@@edit-row/2')

    @browsing
    def test_set_row_configuration(self, browser):
        ISimplelayout(self.page).slblocks_layout = self.layout.copy()
        transaction.commit()

        browser.login().open(self.page.absolute_url() + '/@@edit-row/0')
        browser.fill({'Show in right column': True}).submit()

        self.assertIn('data', ISimplelayout(self.page).slblocks_layout['items'][0])
        self.assertNotIn('data', ISimplelayout(self.page).slblocks_layout['items'][1])

        self.assertTrue(
            ISimplelayout(self.page).slblocks_layout['items'][0]['data']['show_in_right_column'],
            'Expected show_in_right_column to be True'
        )

        browser.open(self.page.absolute_url() + '/@@edit-row/0')
        browser.fill({'Show in right column': False}).submit()

        self.assertFalse(
            ISimplelayout(self.page).slblocks_layout['items'][0]['data']['show_in_right_column'],
            'Expected show_in_right_column to be False'
        )

    @browsing
    def test_successful_form_returns_json(self, browser):

        ISimplelayout(self.page).slblocks_layout = self.layout.copy()
        transaction.commit()

        browser.login().open(self.page.absolute_url() + '/@@edit-row/0')
        browser.fill({'Show in right column': True}).submit()

        self.assertDictEqual(
            {"show_in_right_column": True},
            browser.json
        )
