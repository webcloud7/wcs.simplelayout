from copy import deepcopy
from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.restapi.serializer import CONVERT_TOKENS_CUSTOMVIEWFIELDS
from wcs.simplelayout.tests import FunctionalTesting
from z3c.relationfield.relation import RelationValue
from zope.component import getUtility
from zope.intid.interfaces import IIntIds
from zope.schema.interfaces import IVocabularyFactory
import json
import transaction


class TestRestApi(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manager')
        self.page = create(Builder('content page').titled('Test page'))

    def _setup_blocks_with_layout(self):
        block1 = create(Builder('block').titled('Block 1').within(self.page))
        block2 = create(Builder('block').titled('Block 2').within(self.page))

        layout = {
            'items': [
                {
                    '@type': 'row',
                    'items': [
                        {
                            '@type': 'col',
                            'items': [block1.UID()],
                            'width': '6'
                        },
                        {
                            '@type': 'col',
                            'items': [block2.UID()],
                            'width': '6'
                        }
                    ]
                }
            ]
        }
        ISimplelayout(self.page).slblocks_layout = layout
        return layout, block1, block2

    @browsing
    def test_customViewFields_field_serializer_tokens(self, browser):
        vocabulary = getUtility(
            IVocabularyFactory,
            "plone.app.vocabularies.MetadataFields")(self.portal)

        block = create(Builder('all purpose listing block')
                       .titled('List stuff')
                       .within(self.page)
                       .having(customViewFields=list(vocabulary.by_value.keys())))
        browser.login().visit(block, headers=self.api_headers)
        field_value = browser.json['customViewFields']

        for item in field_value:
            if item['title'] in CONVERT_TOKENS_CUSTOMVIEWFIELDS:
                converted_token = CONVERT_TOKENS_CUSTOMVIEWFIELDS[item['title']]
                self.assertEqual(converted_token, item['token'])

    @browsing
    def test_slblocks_layout_deserializer_no_layout_change(self, browser):
        layout, block1, block2 = self._setup_blocks_with_layout()

        with browser.expect_http_error(code=400):
            self.portal.manage_permission('wcs.simplelayout: Manage columns', roles=[], acquire=False)
            transaction.commit()
            browser.login()

            new_layout = deepcopy(layout)
            new_layout['items'][0]['items'].append(
                {
                    '@type': 'col',
                    'items': [],
                    'width': '12'
                }
            )
            browser.open(self.page.absolute_url(),
                         method='PATCH',
                         data=json.dumps({'slblocks_layout': new_layout}),
                         headers=self.api_headers
                         )

        self.assertIn('You cannot change the layout', str(browser.json))

    @browsing
    def test_slblocks_layout_deserializer_no_block_change(self, browser):
        layout, block1, block2 = self._setup_blocks_with_layout()

        with browser.expect_http_error(code=400):
            self.portal.manage_permission('wcs.simplelayout: Add Block', roles=[], acquire=False)
            transaction.commit()
            browser.login()

            new_layout = deepcopy(layout)
            new_layout['items'][0]['items'][0]['items'] = []
            new_layout['items'][0]['items'][1]['items'].append(block1.UID())

            browser.open(self.page.absolute_url(),
                         method='PATCH',
                         data=json.dumps({'slblocks_layout': new_layout}),
                         headers=self.api_headers
                         )

        self.assertIn('You cannot change the block order', str(browser.json))

    @browsing
    def test_slblocks_contains_all_blocks(self, browser):
        # There is a default batch size for lazyset result (serializer)
        for number in range(30):
            create(Builder('block').titled('Block 1').within(self.page))
        self.assertEqual(30, len(self.page.objectIds()))

        browser.login().visit(self.page, headers=self.api_headers)
        self.assertEqual(30, len(tuple(browser.json['slblocks'].keys())))

    @browsing
    def test_hypermedia_batch_urls_are_correct_on_news_listing_block(self, browser):

        newsfolder = create(Builder('news folder'))
        block = create(Builder('news listing block')
                       .having(quantity=3)
                       .within(newsfolder)
                       .titled('News listing'))

        for number in range(1, 10):
            create(Builder('news').within(newsfolder))

        browser.login().open(newsfolder.absolute_url() + '?include_items=1', headers=self.api_headers)
        block_result = browser.json['slblocks'][block.UID()]
        self.assertEqual(
            block.absolute_url() + '?include_items=1',
            block_result['batching']['@id'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=0&include_items=1',
            block_result['batching']['first'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=6&include_items=1',
            block_result['batching']['last'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=3&include_items=1',
            block_result['batching']['next'].replace(':80', '')
        )

        browser.open(block.absolute_url(), headers=self.api_headers)
        block_result = browser.json
        self.assertEqual(
            block.absolute_url(),
            block_result['batching']['@id'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=0',
            block_result['batching']['first'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=6',
            block_result['batching']['last'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=3',
            block_result['batching']['next'].replace(':80', '')
        )

    @browsing
    def test_hypermedia_batch_urls_are_correct_on_file_listing_block(self, browser):
        intids = getUtility(IIntIds)
        mediafolder = create(Builder('mediafolder'))
        block = create(Builder('file listing block')
                       .having(mediafolder=RelationValue(intids.getId(mediafolder)))
                       .within(self.page)
                       .titled('File listing'))

        for number in range(1, 30):
            create(Builder('file').within(mediafolder))

        browser.login().open(self.page.absolute_url() + '?include_items=1', headers=self.api_headers)
        block_result = browser.json['slblocks'][block.UID()]
        self.assertEqual(
            block.absolute_url() + '?include_items=1',
            block_result['batching']['@id'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=0&include_items=1',
            block_result['batching']['first'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=20&include_items=1',
            block_result['batching']['last'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=10&include_items=1',
            block_result['batching']['next'].replace(':80', '')
        )

        browser.open(block.absolute_url(), headers=self.api_headers)
        block_result = browser.json
        self.assertEqual(
            block.absolute_url(),
            block_result['batching']['@id'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=0',
            block_result['batching']['first'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=20',
            block_result['batching']['last'].replace(':80', '')
        )
        self.assertEqual(
            block.absolute_url() + '?b_start=10',
            block_result['batching']['next'].replace(':80', '')
        )

    @browsing
    def test_make_sure_tree_is_not_included(self, browser):
        subpage = create(Builder('content page').within(self.page).titled('Subpage'))
        subsubpage = create(Builder('content page').within(subpage).titled('SubSubpage'))
        subsubsubpage = create(Builder('content page').within(subsubpage).titled('SubSubSubpage'))

        browser.exception_bubbling = True
        browser.login().open(
            self.page.absolute_url() + '?include_items=1&fullobjects=1',
            headers=self.api_headers)
        self.assertEqual(1, len(browser.json['items']))
        self.assertEqual(subpage.absolute_url(),
                         browser.json['items'][0]['@id'].replace(':80', ''))

        self.assertNotIn('items', tuple(browser.json['items'][0].keys()))

        self.assertNotIn(subsubsubpage.Title(), str(browser.json))
