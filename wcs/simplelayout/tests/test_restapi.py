from copy import deepcopy
from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.restapi.serializer import CONVERT_TOKENS_CUSTOMVIEWFIELDS
from wcs.simplelayout.tests import FunctionalTesting
from zope.component import getUtility
from zope.schema.interfaces import IVocabularyFactory
import transaction
import json


class TestRestApi(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manater')
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
