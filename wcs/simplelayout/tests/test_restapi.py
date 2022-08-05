from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from wcs.simplelayout.restapi.serializer import CONVERT_TOKENS_CUSTOMVIEWFIELDS
from wcs.simplelayout.tests import FunctionalTesting
from zope.component import getUtility
from zope.schema.interfaces import IVocabularyFactory


class TestRestApi(FunctionalTesting):

    def setUp(self):
        super().setUp()
        self.grant('Manater')
        self.page = create(Builder('content page').titled('Test page'))

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
