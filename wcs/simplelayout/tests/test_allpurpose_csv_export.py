from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from wcs.simplelayout.tests import FunctionalTesting
import csv
import io
import transaction


class TestAllPurposeListingBlockCsvExport(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manager')
        self.page = create(Builder('content page').titled('Test page'))

    def create_block(self, portal_type='ContentPage', **kwargs):
        fields = dict(
            query=[{'i': 'portal_type',
                    'o': 'plone.app.querystring.operation.selection.any',
                    'v': [portal_type]}],
            sort_on='sortable_title',
            customViewFields=['Title'],
        )
        fields.update(kwargs)
        return create(Builder('all purpose listing block')
                      .titled('Listing')
                      .within(self.page)
                      .having(**fields))

    def csv_rows(self, browser):
        return list(csv.reader(io.StringIO(browser.contents)))

    @browsing
    def test_csv_contains_all_results_not_only_first_batch(self, browser):
        block = self.create_block(item_count=2)
        create(Builder('content page').titled('Page a'))
        create(Builder('content page').titled('Page b'))
        create(Builder('content page').titled('Page c'))

        browser.login().visit(block, headers=self.api_headers)
        self.assertEqual(
            2, len(browser.json['items']),
            'Expected the block view to batch the items by item_count')

        browser.visit(block, view='@@csv-export')
        self.assertEqual(
            [['Page a'], ['Page b'], ['Page c'], ['Test page']],
            self.csv_rows(browser)[1:],
            'Expected all results in the CSV, not only the first batch')

    @browsing
    def test_csv_headers_match_custom_view_fields_titles(self, browser):
        block = self.create_block(customViewFields=['Title', 'Description'])

        browser.login().visit(block, headers=self.api_headers)
        expected_header = [column['title']
                           for column in browser.json['customViewFields']]

        browser.visit(block, view='@@csv-export')
        self.assertEqual(
            expected_header, self.csv_rows(browser)[0],
            'Expected the CSV header to use the column titles of the block')

    @browsing
    def test_csv_values_match_block_items(self, browser):
        block = self.create_block(
            customViewFields=['Title', 'ModificationDate'])

        browser.login().open(f'{block.absolute_url()}?fullobjects=1',
                             headers=self.api_headers)
        item = browser.json['items'][0]

        browser.visit(block, view='@@csv-export')
        self.assertEqual(
            [item['title'], item['modified']], self.csv_rows(browser)[1],
            'Expected the CSV values to match the serialized block items')

    @browsing
    def test_csv_renders_file_size_and_mime_type_columns(self, browser):
        mediafolder = create(Builder('mediafolder'))
        create(Builder('file')
               .titled('A file')
               .attach_file_containing(b'Some data', name='data.txt')
               .within(mediafolder))
        block = self.create_block(
            portal_type='File',
            customViewFields=['Title', 'getObjSize', 'mime_type'])

        browser.login().open(f'{block.absolute_url()}?fullobjects=1',
                             headers=self.api_headers)
        item = browser.json['items'][0]

        browser.visit(block, view='@@csv-export')
        self.assertEqual(
            [item['title'],
             str(item['file']['size']),
             item['file']['content-type']],
            self.csv_rows(browser)[1],
            'Expected size and content type values of the primary field')

    @browsing
    def test_csv_download_headers_use_block_id(self, browser):
        block = self.create_block()

        browser.login().visit(block, view='@@csv-export')
        self.assertEqual(
            'text/csv; charset=utf-8',
            browser.headers.get('content-type'),
            'Expected a CSV content type header')
        self.assertEqual(
            f'attachment; filename="{block.getId()}.csv"',
            browser.headers.get('content-disposition'),
            'Expected the filename to be derived from the block id')

    @browsing
    def test_csv_rows_respect_view_permission(self, browser):
        block = self.create_block()
        private_page = create(Builder('content page').titled('Private page'))
        private_page.manage_permission('View', roles=['Manager'],
                                       acquire=False)
        private_page.manage_permission('Access contents information',
                                       roles=['Manager'], acquire=False)
        private_page.reindexObjectSecurity()
        transaction.commit()

        browser.login().visit(block, view='@@csv-export')
        self.assertIn(
            [private_page.Title()], self.csv_rows(browser)[1:],
            'Expected the restricted page in the CSV export for a manager')

        self.grant('Member')
        browser.visit(block, view='@@csv-export')
        self.assertNotIn(
            [private_page.Title()], self.csv_rows(browser)[1:],
            'Expected no restricted page in the CSV export for a regular user')
