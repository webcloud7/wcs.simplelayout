from datetime import datetime
from ftw.builder import Builder
from ftw.builder import create
from plone.app.textfield.value import RichTextValue
from wcs.simplelayout.tests import FunctionalTesting
import transaction


class TestSearchableTextIndexer(FunctionalTesting):

    def setUp(self):
        self.portal = self.layer['portal']
        transaction.commit()

        self.contentpage = create(Builder('content page')
                                  .titled('ContentPage'))
        self.textblock = create(Builder('block')
                                .titled('TextBlock')
                                .within(self.contentpage)
                                .having(text=RichTextValue('asdf')))

    def search_for(self, term, path=None):
        query = {'SearchableText': term,
                 'portal_type': 'ContentPage'}
        if path:
            query['path'] = path
        return self.layer['portal'].portal_catalog(query)

    def test_searchable_text_is_indexed_on_container(self):
        result = self.search_for('asdf')
        assert len(result) == 1, 'Expect exactly one brain'
        self.assertEqual(self.contentpage,
                         result[0].getObject(),
                         'Expect the contentpage which has a textblock with'
                         ' the text "Text"')

    def test_searchable_text_is_up_to_date_on_delete(self):
        self.contentpage.manage_delObjects(['textblock'])
        result = self.search_for('asdf')
        self.assertEqual(0, len(result), 'Expect no entry')

    def test_searchable_text_is_up_to_date_on_move(self):
        second_page = create(Builder('content page')
                             .titled('ContentPage2'))

        cut = self.contentpage.manage_cutObjects([self.textblock.getId()])
        second_page.manage_pasteObjects(cut)

        result = self.search_for('asdf')
        self.assertEqual(result[0].getURL(), second_page.absolute_url())

    def test_searchable_text_is_up_to_date_on_copy(self):
        second_page = create(Builder('content page')
                             .titled('ContentPage2'))

        copy = self.contentpage.manage_copyObjects([self.textblock.getId()])
        second_page.manage_pasteObjects(copy)

        result = self.search_for('asdf')
        self.assertEqual(2, len(result), 'Expect 2 brains.')

    def test_blocks_with_dates_are_not_in_page(self):
        self.add_behavior('Block', 'plone.publication')
        create(Builder('block')
               .titled('TextBlock')
               .within(self.contentpage)
               .having(effective=datetime.now(),
                       text=RichTextValue('date')))

        result = self.search_for('date')
        self.assertEqual(0, len(result), 'Expect 0 results.')
