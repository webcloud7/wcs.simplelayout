from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from wcs.simplelayout.tests import FunctionalTesting


class TestRestrictedReadPermission(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manager')
        self.page = create(Builder('content page').titled('Test page'))
        self.user = create(Builder('user').named('regular', 'User'))

    @browsing
    def test_field_filter_by_path_IS_serialized_if_logged_in(self, browser):
        block1 = create(Builder('news listing block')
                        .titled('Block 1')
                        .within(self.page)
                        .having(filter_by_path=[self.page]))
        browser.login(self.user).visit(block1, headers=self.api_headers)
        self.assertIn('filter_by_path', browser.json)

    @browsing
    def test_field_mediafolder_IS_serialized_if_logged_in(self, browser):
        mediafolder = create(Builder('mediafolder'))
        block1 = create(Builder('file listing block')
                        .titled('Block 1')
                        .within(self.page)
                        .having(mediafolder=mediafolder))
        browser.login(self.user).visit(block1, headers=self.api_headers)
        self.assertTrue('mediafolder', browser.json)

    @browsing
    def test_field_filter_by_path_NOT_serialized_if_logged_in(self, browser):
        block1 = create(Builder('news listing block').titled('Block 1').within(self.page))
        browser.logout()
        browser.visit(block1, headers=self.api_headers)
        self.assertNotIn('filter_by_path', browser.json)

    @browsing
    def test_field_mediafolder_NOT_serialized_if_logged_in(self, browser):
        mediafolder = create(Builder('mediafolder'))
        block1 = create(Builder('file listing block')
                        .titled('Block 2')
                        .within(self.page)
                        .having(mediafolder=mediafolder))

        browser.logout()
        browser.visit(block1, headers=self.api_headers)
        self.assertNotIn('mediafolder', browser.json)
