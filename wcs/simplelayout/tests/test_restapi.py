from copy import deepcopy
from datetime import datetime
from datetime import timedelta
from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from plone.app.textfield.value import RichTextValue
from wcs.simplelayout.contenttypes.behaviors import IBlockNewsOptions
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.restapi.serializer import CONVERT_TOKENS_CUSTOMVIEWFIELDS
from wcs.simplelayout.tests import FunctionalTesting
from wcs.simplelayout.utils import add_sort_limit_to_query
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
        block2 = create(Builder('block').titled('Block 2')
                        .within(self.page)
                        .having(text=RichTextValue('Some text')
                                )
                        )

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
        transaction.commit()
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
    def test_sort_limit_on_newslistingblock(self, browser):
        query = {}

        # no sort_limit
        add_sort_limit_to_query(query)
        self.assertNotIn('sort_limit', query)

        # page 1
        self.portal.REQUEST.form['b_size'] = '3'
        add_sort_limit_to_query(query)
        self.assertEqual(query['sort_limit'], 3)

        # # page 2
        # self.portal.REQUEST.form['b_size'] = '3'
        # self.portal.REQUEST.form['b_start'] = '3'
        # add_sort_limit_to_query(query)
        # self.assertEqual(query['sort_limit'], 6)

        # # page 3
        # self.portal.REQUEST.form['b_size'] = '3'
        # self.portal.REQUEST.form['b_start'] = '6'
        # add_sort_limit_to_query(query)
        # self.assertEqual(query['sort_limit'], 9)

        # # page 4
        # self.portal.REQUEST.form['b_size'] = '3'
        # self.portal.REQUEST.form['b_start'] = '9'
        # add_sort_limit_to_query(query)
        # self.assertEqual(query['sort_limit'], 12)

        # # odd pagination
        # self.portal.REQUEST.form['b_size'] = '3'
        # self.portal.REQUEST.form['b_start'] = '7'
        # add_sort_limit_to_query(query)
        # self.assertEqual(query['sort_limit'], 9)

        # self.portal.REQUEST.form['b_size'] = '10'
        # self.portal.REQUEST.form['b_start'] = '33'
        # add_sort_limit_to_query(query)
        # self.assertEqual(query['sort_limit'], 40)

        # bad values
        self.portal.REQUEST.form['b_size'] = 'a'
        with self.assertRaises(ValueError):
            add_sort_limit_to_query(query)

        self.portal.REQUEST.form['b_size'] = '3'
        self.portal.REQUEST.form['b_start'] = 'a'
        with self.assertRaises(ValueError):
            add_sort_limit_to_query(query)

        self.portal.REQUEST.form['b_size'] = '3'
        self.portal.REQUEST.form['b_start'] = '-1'
        with self.assertRaises(ValueError):
            add_sort_limit_to_query(query)

        self.portal.REQUEST.form['b_size'] = '-1'
        self.portal.REQUEST.form['b_start'] = '3'
        with self.assertRaises(ValueError):
            add_sort_limit_to_query(query)

    @browsing
    def test_hypermedia_batch_urls_are_correct_on_news_listing_block(self, browser):
        page = create(Builder('content page').titled('A page'))
        newsfolder = create(Builder('news folder').within(page))
        block = create(Builder('news listing block')
                       .having(quantity=3)
                       .within(page)
                       .titled('News listing'))

        for number in range(1, 10):
            create(Builder('news').within(newsfolder))

        browser.login().open(page.absolute_url() + '?include_items=1', headers=self.api_headers)
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
    def test_news_listing_block_filter_by_subject(self, browser):
        self.add_behavior('News', 'plone.categorization')
        page = create(Builder('content page'))
        newsfolder = create(Builder('news folder').within(page))
        block = create(Builder('news listing block')
                       .having(quantity=3)
                       .within(page)
                       .titled('News listing'))

        news_with_subject = create(Builder('news')
                                   .titled('News with subject')
                                   .having(subjects=['test1', 'test2'])
                                   .within(newsfolder))
        news_without_subject = create(Builder('news')
                                      .titled('News without subject')
                                      .within(newsfolder))

        browser.login().open(block.absolute_url() + '?include_items=1', headers=self.api_headers)
        newslist = browser.json['items']
        self.assertEqual(2, len(newslist))

        IBlockNewsOptions(block).subjects = ['test1']
        transaction.commit()

        browser.open(block.absolute_url() + '?include_items=1', headers=self.api_headers)
        newslist = browser.json['items']
        self.assertEqual(1, len(newslist))
        self.assertEqual(
            newslist[0]['@id'].replace(':80', ''),
            news_with_subject.absolute_url()
        )

    @browsing
    def test_news_listing_block_filter_by_age(self, browser):
        self.add_behavior('News', 'plone.categorization')
        page = create(Builder('content page').titled('A title'))
        newsfolder = create(Builder('news folder').within(page))
        block = create(Builder('news listing block')
                       .having(quantity=3)
                       .within(page)
                       .titled('News listing'))

        old_news = create(Builder('news')
                          .titled('Super old news')
                          .having(news_date=datetime.now() - timedelta(days=100))
                          .within(newsfolder))
        new_news = create(Builder('news')
                          .titled('News from today')
                          .having(news_date=datetime.now())
                          .within(newsfolder))

        browser.login().open(block.absolute_url() + '?include_items=1', headers=self.api_headers)
        newslist = browser.json['items']
        self.assertEqual(2, len(newslist))

        IBlockNewsOptions(block).maximum_age = 10
        transaction.commit()

        browser.open(block.absolute_url() + '?include_items=1', headers=self.api_headers)
        newslist = browser.json['items']
        self.assertEqual(1, len(newslist))
        self.assertEqual(
            newslist[0]['@id'].replace(':80', ''),
            new_news.absolute_url()
        )

    @browsing
    def test_listingblock_can_include_individual_files(self, browser):
        self.add_behavior('FileListingBlock', 'wcs.simplelayout.contenttypes.behaviors.IFilesReference')
        intids = getUtility(IIntIds)
        mediafolder = create(Builder('mediafolder'))

        mediafolder2 = create(Builder('mediafolder'))
        alternative_file1 = create(Builder('file').within(mediafolder2))
        alternative_file2 = create(Builder('file').within(mediafolder2))

        block = create(Builder('file listing block')
                       .having(mediafolder=RelationValue(intids.getId(mediafolder)),
                               files=[RelationValue(intids.getId(alternative_file1))])
                       .within(self.page)
                       .titled('File listing'))

        file1 = create(Builder('file').within(mediafolder))
        file2 = create(Builder('file').within(mediafolder))

        browser.login().open(self.page.absolute_url() + '?include_items=1', headers=self.api_headers)
        block_result = browser.json['slblocks'][block.UID()]

        self.assertEqual(3, len(block_result['items']))

        paths = tuple(map(lambda item: item['@id'].replace(':80', ''), block_result['items']))
        self.assertIn(file1.absolute_url(), paths)
        self.assertIn(file2.absolute_url(), paths)

        self.assertIn(alternative_file1.absolute_url(), paths)
        self.assertNotIn(alternative_file2.absolute_url(), paths)

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
    def test_imagelistingblock_only_lists_images(self, browser):
        intids = getUtility(IIntIds)
        mediafolder = create(Builder('mediafolder'))
        block = create(Builder('image listing block')
                       .having(mediafolder=RelationValue(intids.getId(mediafolder)))
                       .within(self.page)
                       .titled('Image listing'))

        create(Builder('file').within(mediafolder))
        create(Builder('image').within(mediafolder))

        browser.login().open(self.page.absolute_url() + '?include_items=1', headers=self.api_headers)
        block_result = browser.json['slblocks'][block.UID()]
        self.assertEqual(1, len(block_result['items']))
        self.assertEqual('Image', block_result['items'][0]['@type'])

    @browsing
    def test_make_sure_tree_is_not_included(self, browser):
        subpage = create(Builder('content page').within(self.page).titled('Subpage'))
        subsubpage = create(Builder('content page').within(subpage).titled('SubSubpage'))
        subsubsubpage = create(Builder('content page').within(subsubpage).titled('SubSubSubpage'))

        browser.login().open(
            self.page.absolute_url() + '?include_items=1&fullobjects=1',
            headers=self.api_headers)
        self.assertEqual(1, len(browser.json['items']))
        self.assertEqual(subpage.absolute_url(),
                         browser.json['items'][0]['@id'].replace(':80', ''))

        self.assertNotIn('items', tuple(browser.json['items'][0].keys()))

        self.assertNotIn(subsubsubpage.Title(), str(browser.json))

    @browsing
    def test_make_sure_slblocks_and_slblocks_layout_are_not_included_on_subpage(self, browser):
        subpage = create(Builder('content page').within(self.page).titled('Subpage'))
        block1 = create(Builder('block').titled('Block 1').within(subpage))

        browser.login().open(
            self.page.absolute_url() + '?include_items=1&fullobjects=1',
            headers=self.api_headers)

        self.assertEqual(1, len(browser.json['items']))
        self.assertEqual(subpage.absolute_url(),
                         browser.json['items'][0]['@id'].replace(':80', ''))

        self.assertEqual({}, browser.json['items'][0]['slblocks'])
        self.assertEqual({}, browser.json['items'][0]['slblocks_layout'])

    @browsing
    def test_make_sure_slblocks_and_slblocks_layout_are_included_on_page(self, browser):
        subpage = create(Builder('content page').within(self.page).titled('Subpage'))
        block1 = create(Builder('block').titled('Block 1').within(subpage))

        browser.login().open(
            subpage.absolute_url(),
            headers=self.api_headers)
        self.assertIn(block1.UID(), str(browser.json['slblocks_layout']))
        browser.open(
            subpage.absolute_url() + '?include_items=1&fullobjects=1',
            headers=self.api_headers)
        self.assertIn(block1.UID(), str(browser.json['slblocks_layout']))

        # Test with explicit ++api++ traverser
        api_url = self.portal.absolute_url() + '/++api++'
        browser.open(
            subpage.absolute_url().replace(self.portal.absolute_url(), api_url),
            headers=self.api_headers)
        self.assertIn(block1.UID(), str(browser.json['slblocks_layout']))

    @browsing
    def test_no_blocks_in_items_key(self, browser):
        block1 = create(Builder('block').titled('Block 1').within(self.page))
        block2 = create(Builder('block').titled('Block 2').within(self.page))
        subpage = create(Builder('content page').titled('Supage').within(self.page))

        browser.login().visit(self.page, headers=self.api_headers)

        items_urls = [item['@id'].replace(':80', '') for item in browser.json['items']]

        self.assertNotIn(block1.absolute_url(), items_urls)
        self.assertNotIn(block2.absolute_url(), items_urls)
        self.assertIn(subpage.absolute_url(), items_urls)

    @browsing
    def test_layout_properties_multiple_blocks_multiple_column(self, browser):
        layout, block1, block2 = self._setup_blocks_with_layout()

        browser.login().visit(self.page, headers=self.api_headers)
        self.assertDictEqual(
            {
                'columns': 2,
                'single_column': False,
                'css_classes': ['columns-2'],
            },
            browser.json['slblocks_layout']['items'][0]['properties']
        )

    @browsing
    def test_layout_properties_multiple_blocks_single_column(self, browser):
        layout, block1, block2 = self._setup_blocks_with_layout()

        layout = {
            'items': [
                {
                    '@type': 'row',
                    'items': [
                        {
                            '@type': 'col',
                            'items': [block1.UID(), block2.UID()],
                            'width': '12'
                        },
                    ]
                }
            ]
        }
        ISimplelayout(self.page).slblocks_layout = layout
        transaction.commit()

        browser.login().visit(self.page, headers=self.api_headers)
        self.assertDictEqual(
            {
                'columns': 1,
                'single_block': False,
                'single_column': True,
                'css_classes': ['single-column', 'columns-1']
            },
            browser.json['slblocks_layout']['items'][0]['properties']
        )

    @browsing
    def test_layout_properties_single_block_multiple_rows(self, browser):
        layout, block1, block2 = self._setup_blocks_with_layout()

        layout = {
            'items': [
                {
                    '@type': 'row',
                    'items': [
                        {
                            '@type': 'col',
                            'items': [block1.UID()],
                            'width': '12'
                        },
                    ]
                },
                {
                    '@type': 'row',
                    'items': [
                        {
                            '@type': 'col',
                            'items': [block2.UID()],
                            'width': '12'
                        },
                    ]
                }
            ]
        }
        ISimplelayout(self.page).slblocks_layout = layout
        transaction.commit()

        browser.login().visit(self.page, headers=self.api_headers)
        self.assertDictEqual(
            {
                'columns': 1,
                'single_block': True,
                'single_column': True,
                'title_only_block': True,
                'css_classes': ['single-column',
                                'columns-1',
                                'single-block',
                                'title-only-block']
            },
            browser.json['slblocks_layout']['items'][0]['properties']
        )
        self.assertDictEqual(
            {
                'columns': 1,
                'single_block': True,
                'single_column': True,
                'title_only_block': False,
                'css_classes': ['single-column',
                                'columns-1',
                                'single-block']
            },
            browser.json['slblocks_layout']['items'][1]['properties']
        )

    @browsing
    def test_block_with_always_include_items_returns_all_items(self, browser):
        self.add_behavior(
            'Block',
            'wcs.simplelayout.contenttypes.behaviors.IBlockAlwaysIncludeItems',
        )
        block = create(Builder('block').titled('Block').within(self.page))
        for number in range(30):
            create(Builder('file').titled(f'File {number}').within(block))

        browser.login().visit(self.page, headers=self.api_headers)
        block_result = browser.json['slblocks'][block.UID()]
        self.assertEqual(30, block_result['items_total'])
        self.assertEqual(30, len(block_result['items']))

    @browsing
    def test_layout_properties_on_other_blocks(self, browser):
        block1 = create(Builder('news listing block').titled('News').within(self.page))
        block2 = create(Builder('video block').titled('Video').within(self.page))

        layout = {
            'items': [
                {
                    '@type': 'row',
                    'items': [
                        {
                            '@type': 'col',
                            'items': [block1.UID()],
                            'width': '12'
                        },
                    ]
                },
                {
                    '@type': 'row',
                    'items': [
                        {
                            '@type': 'col',
                            'items': [block2.UID()],
                            'width': '12'
                        },
                    ]
                }
            ]
        }
        ISimplelayout(self.page).slblocks_layout = layout
        transaction.commit()

        browser.login().visit(self.page, headers=self.api_headers)
        self.assertDictEqual(
            {
                'columns': 1,
                'single_block': True,
                'single_column': True,
                'title_only_block': False,
                'css_classes': ['single-column',
                                'columns-1',
                                'single-block']
            },
            browser.json['slblocks_layout']['items'][0]['properties']
        )
        self.assertDictEqual(
            {
                'columns': 1,
                'single_block': True,
                'single_column': True,
                'title_only_block': False,
                'css_classes': ['single-column',
                                'columns-1',
                                'single-block']
            },
            browser.json['slblocks_layout']['items'][1]['properties']
        )
