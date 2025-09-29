from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from plone import api
from plone.app.textfield.value import RichTextValue
from unittest import TestCase
from wcs.simplelayout.fields.table import TableRichText
from wcs.simplelayout.tests import FunctionalTesting
from wcs.simplelayout.utils import convert_table_to_json
from zope.interface import Invalid
import json
import transaction


class TestTableRichTextField(FunctionalTesting):

    def test_field_validator_invalid_values(self):
        with self.assertRaises(Invalid):
            TableRichText().validate(RichTextValue('foo', 'text/html'))

        with self.assertRaises(Invalid):
            TableRichText().validate(RichTextValue('<p>bar</p>', 'text/html'))

        with self.assertRaises(Invalid):
            TableRichText().validate(RichTextValue('<p>text</p><table><tr><td>foo</td></tr></table>', 'text/html'))

        with self.assertRaises(Invalid):
            TableRichText().validate(RichTextValue('textnode<table><tr><td>foo</td></tr></table>', 'text/html'))

    def test_nested_tables_are_invalid(self):
        with self.assertRaises(Invalid):
            TableRichText().validate(
                RichTextValue('<table><tr><td><table><tr><td>foo</td></tr></table></td></tr></table>', 'text/html')
            )

    def test_multiple_tables_are_invalid(self):
        with self.assertRaises(Invalid):
            TableRichText().validate(
                RichTextValue('<table><tr><td>foo</td></tr></table>\n<table><tr><td>bar</td></tr></table>', 'text/html')
            )

    def test_a_single_table_is_valid(self):
        self.assertIsNone(
            TableRichText().validate(RichTextValue('<table><tr><td>foo</td></tr></table>', 'text/html'))
        )


class TestTableRichTextWidget(FunctionalTesting):
    def setUp(self):
        super().setUp()
        self.grant('Manager')
        self.page = create(Builder('content page').titled('Page'))
        self.tableblock = create(Builder('table block')
                                 .titled('Table')
                                 .within(self.page)
                                 .having(table=RichTextValue('<table><tr><td>foo</td></tr></table>', 'text/html', 'text/x-html-safe')))

    @browsing
    def test_base_table_tiny_configuration(self, browser):
        browser.login()
        browser.open(self.tableblock, view='edit')
        textarea = browser.css('.tablerichtext-field').first
        config = json.loads(textarea.attrib['data-pat-tinymce'])['tiny']

        self.assertEqual('nonedit', config['noneditable_class'])
        self.assertEqual('editcontent', config['editable_class'])
        self.assertEqual(['plonelink', 'table'], config['plugins'])
        self.assertEqual('', config['menubar'])
        self.assertEqual('bold | table tablerowheader tablecolheader code unlink plonelink', config['toolbar'])
        self.assertEqual('preservetable', config['table_column_resizing'])
        self.assertEqual('http://nohost:80/plone/++resource++simplelayout/js/src/tinymce_plugin.js',
                         config['external_plugins']['tableOnly'])

    @browsing
    def test_override_tiny_configuration(self, browser):
        api.portal.set_registry_record(
            'wcs.simplelayout.table.tiny',
            {'TableBlock.table': {'toolbar': '', 'invalid_styles': 'width', 'newkey': 'newvalue'}},
        )
        transaction.commit()

        browser.login()
        browser.open(self.tableblock, view='edit')
        textarea = browser.css('.tablerichtext-field').first
        config = json.loads(textarea.attrib['data-pat-tinymce'])['tiny']

        self.assertEqual('nonedit', config['noneditable_class'])
        self.assertEqual('editcontent', config['editable_class'])

        self.assertEqual('width', config['invalid_styles'])
        self.assertEqual('', config['toolbar'])
        self.assertEqual('newvalue', config['newkey'])


class TestConvertTableToJson(TestCase):

    def test_table(self):
        self.assertEqual(
            {'@type': 'table', 'rows': [], 'attrs': {}},
            convert_table_to_json('<table></table>')
        )

        self.assertEqual(
            {'@type': 'table', 'rows': [], 'attrs': {'class': 'listing'}},
            convert_table_to_json('<table class="listing"></table>')
        )

        self.assertEqual(
            {'@type': 'table', 'rows': [], 'attrs': {'style': {'width': '100%', 'color': 'red'}}},
            convert_table_to_json('<table style="width: 100%;color: red"></table>')
        )

    def test_row(self):
        self.assertEqual(
            {
                '@type': 'table', 'attrs': {}, 'rows': [
                    {'@type': 'row', 'cells': [], 'attrs': {
                        'style': {'width': '100%', 'color': 'red'},
                        'class': 'anything'},
                     }
                ]
            },
            convert_table_to_json('<table><tr style="width: 100%;color: red" class="anything"></tr></table>')
        )

    def test_cell(self):
        self.assertEqual(
            {
                '@type': 'table', 'attrs': {}, 'rows': [
                    {'@type': 'row', 'attrs': {}, 'cells': [
                        {'@type': 'cell', 'content': 'foo', 'attrs': {
                            'style': {'width': '100%', 'color': 'red'},
                            'class': 'anything'},
                            'header': False,
                         }
                    ]
                    }
                ]
            },
            convert_table_to_json('<table><tr><td style="width: 100%;color: red" class="anything">foo</td</tr></table>')
        )

    def test_header_cell_row(self):
        self.assertEqual(
            {
                '@type': 'table', 'attrs': {}, 'rows': [
                    {'@type': 'row', 'attrs': {}, 'cells': [
                        {'@type': 'cell', 'content': 'foo', 'attrs': {'scope': 'row'}, 'header': True, }
                    ]
                    }
                ]
            },
            convert_table_to_json('<table><thead><tr><th scope="row">foo</td</tr></thead></table>')
        )

    def test_header_cell_col(self):
        self.assertEqual(
            {
                '@type': 'table', 'attrs': {}, 'rows': [
                    {'@type': 'row', 'attrs': {}, 'cells': [
                        {'@type': 'cell', 'content': 'foo', 'attrs': {'scope': 'col'}, 'header': True, }
                    ]
                    }
                ]
            },
            convert_table_to_json('<table><tbody><tr><th scope="col">foo</td</tr></tbody></table>')
        )

    def test_colgroup_width_on_cell(self):
        self.assertEqual(
            {
                '@type': 'table', 'attrs': {}, 'rows': [
                    {'@type': 'row', 'attrs': {}, 'cells': [
                        {'@type': 'cell', 'content': 'foo',
                            'attrs': {'style': {'width': '35%'}},
                            'header': False,
                         }
                    ]
                    }
                ]
            },
            convert_table_to_json(
                '<table><colgroup><col style="width: 35%;"></colgroup><tbody><tr><td>foo</td</tr></tbody></table>')
        )


class TestTableBlockRestApiIntegration(FunctionalTesting):
    def setUp(self):
        super().setUp()
        self.grant('Manager')
        self.page = create(Builder('content page').titled('Page'))
        self.tableblock = create(Builder('table block')
                                 .titled('Table')
                                 .within(self.page)
                                 .having(table=RichTextValue('<table><tr><td>foo</td></tr></table>', 'text/html', 'text/x-html-safe')))

    @browsing
    def test_table_field_has_json_represenation(self, browser):
        browser.login().visit(self.tableblock, headers=self.api_headers)
        self.assertEqual(
            '<table><tr><td>foo</td></tr></table>',
            browser.json['table']['data']
        )

        self.assertEqual(
            'text/html',
            browser.json['table']['content-type']
        )
        self.assertIn('json', browser.json['table'])
        self.assertEqual(
            {
                '@type': 'table',
                'attrs': {},
                'rows': [
                    {
                        '@type': 'row', 'attrs': {}, 'cells': [
                            {
                                '@type': 'cell', 'attrs': {}, 'content': 'foo', 'header': False
                            },
                        ]
                    }
                ]
            },
            browser.json['table']['json']
        )
