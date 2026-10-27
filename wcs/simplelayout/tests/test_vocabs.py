from ftw.testbrowser import browsing
from plone import api
from wcs.simplelayout.tests import FunctionalTesting
from zope.component import getUtility
from zope.schema.interfaces import IVocabularyFactory
import transaction


VOCABULARY_NAME = 'wcs.simplelayout.vocabularies.DefaultWorkflowStates'


class TestDefaultWorkflowStatesVocabulary(FunctionalTesting):

    def setUp(self):
        super().setUp()
        api.portal.get_tool('portal_workflow').setDefaultChain('simple_publication_workflow')
        transaction.commit()

    def test_vocabulary_terms_are_the_default_chain_states_with_plain_titles_sorted_by_title(self):
        vocabulary = getUtility(IVocabularyFactory, name=VOCABULARY_NAME)(self.portal)

        self.assertEqual(
            [
                ('pending', 'pending', 'Pending review'),
                ('private', 'private', 'Private'),
                ('published', 'published', 'Published'),
            ],
            [(term.value, term.token, term.title) for term in vocabulary],
            msg='Terms must be exactly the default chain states, with the state id as '
                'value/token and the plain state title, sorted by title.')

    @browsing
    def test_vocabulary_endpoint_returns_default_chain_states(self, browser):
        browser.login().open(
            f'{self.portal.absolute_url()}/@vocabularies/{VOCABULARY_NAME}',
            headers=self.api_headers)

        self.assertEqual(
            [
                {'token': 'pending', 'title': 'Pending review'},
                {'token': 'private', 'title': 'Private'},
                {'token': 'published', 'title': 'Published'},
            ],
            browser.json['items'],
            msg='The @vocabularies endpoint must list the default chain states.')
