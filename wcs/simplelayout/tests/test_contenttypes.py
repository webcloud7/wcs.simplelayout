from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from ftw.testbrowser.pages import factoriesmenu
from ftw.testbrowser.pages import plone
from wcs.simplelayout.tests import FunctionalTesting


class TestSampleTypes(FunctionalTesting):
    @browsing
    def test_add_page(self, browser):
        browser.login().visit()
        factoriesmenu.add('Content Page')
        browser.fill({'Title': u'This is a ContentPage'})
        browser.find_button_by_label('Save').click()
        self.assertEqual(u'This is a ContentPage', plone.first_heading())

    def test_add_page_using_builder(self):
        page = create(Builder('content page').titled('this is the title ü'))
        self.assertEqual('this is the title ü', page.Title())
