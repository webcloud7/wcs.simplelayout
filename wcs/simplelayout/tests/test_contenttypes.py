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

    @browsing
    def test_add_default_block(self, browser):
        contentpage = create(Builder('content page').titled(u'A page'))

        browser.login().open(contentpage, view='++add++Block')
        browser.fill({'Title': u'This is a Block',
                      'Text': u'<p>Some text</p>'})
        browser.find_button_by_label('Save').click()

        blocks = contentpage.objectValues()
        self.assertEqual(1, len(blocks))
        self.assertEqual(blocks[0].Title(), u'This is a Block')
        self.assertEqual(blocks[0].text.raw, u'<p>Some text</p>')

    @browsing
    def test_add_media_folder(self, browser):
        browser.login().visit()
        factoriesmenu.add('Media Folder')
        browser.fill({'Title': u'This is a media folder'})
        browser.find_button_by_label('Save').click()
        self.assertEqual(u'This is a media folder', plone.first_heading())
