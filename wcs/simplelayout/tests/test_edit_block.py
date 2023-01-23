from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from wcs.simplelayout.tests import FunctionalTesting


class TestEditBlock(FunctionalTesting):
    def setUp(self):
        super().setUp()
        self.grant('Manager')
        self.page = create(Builder('content page').titled('Test page'))
        self.block = create(Builder('block').titled('Block 1').within(self.page))

    @browsing
    def test_make_sure_form_wrapper_is_used(self, browser):
        browser.login().visit(self.block, view='editblock')

        # This is only implicit possible by checking for example for the byline
        self.assertFalse(browser.css('#section-byline'),
                         'Expect no byline on edit form')

    @browsing
    def test_return_json_on_successfully_submit_form(self, browser):
        browser.login().visit(self.block, view='editblock')
        browser.find_button_by_label('Save').click()
        self.assertEqual(self.block.absolute_url(),
                         browser.json['@id'].replace(':80', ''))
