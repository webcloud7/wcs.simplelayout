from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from wcs.simplelayout.tests import FunctionalTesting


class TestBlockComponentsExpansion(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manager')
        self.page = create(Builder('content page').titled('Page'))
        self.block = create(Builder('block').titled('Block').within(self.page))

    def block_components(self, browser):
        return browser.json['slblocks'][self.block.UID()]['@components']

    @browsing
    def test_site_structure_components_stay_stubs_on_blocks(self, browser):
        browser.login().open(
            self.page.absolute_url() + '?expand=breadcrumbs,contextnavigation,navroot',
            headers=self.api_headers)
        components = self.block_components(browser)

        for name in ('breadcrumbs', 'contextnavigation', 'navroot'):
            self.assertEqual({'@id'}, set(components[name]), f'{name} must stay an @id stub on blocks')

    @browsing
    def test_other_requested_components_are_expanded_on_blocks(self, browser):
        browser.login().open(self.page.absolute_url() + '?expand=breadcrumbs,workflow',
                             headers=self.api_headers)

        self.assertIn('transitions', self.block_components(browser)['workflow'],
                      'workflow must be expanded on blocks')

    @browsing
    def test_editor_expansion_with_types_and_actions(self, browser):
        browser.login().open(self.page.absolute_url() + '?expand=types,actions',
                             headers=self.api_headers)
        components = self.block_components(browser)

        self.assertIn('object', components['actions'], 'the editor reads the object actions of a block')
        self.assertIn('object_buttons', components['actions'],
                      'the editor reads the object_buttons actions of a block')
        self.assertIsInstance(components['types'], list, 'the editor reads the addable types of a block')

    @browsing
    def test_block_without_expand_request_has_only_stubs(self, browser):
        browser.login().open(self.page.absolute_url(), headers=self.api_headers)
        components = self.block_components(browser)

        self.assertEqual(
            {'@id'}, set(components['actions']), 'actions must be an @id stub without expand')
        self.assertEqual(
            {'@id'}, set(components['types']), 'types must be an @id stub without expand')

    @browsing
    def test_block_items_keep_requested_expansion(self, browser):
        create(Builder('file').titled('File').with_dummy_content().within(self.block))

        browser.login().open(
            self.page.absolute_url() + '?include_items=1&fullobjects=1&expand=breadcrumbs',
            headers=self.api_headers)
        items = browser.json['slblocks'][self.block.UID()]['items']

        self.assertIn('items', items[0]['@components']['breadcrumbs'],
                      'items inside a block must keep the requested expansion')
