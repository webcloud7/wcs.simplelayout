from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from ftw.testbrowser.pages import factoriesmenu
from wcs.simplelayout.tests import FunctionalTesting


class TestSampleTypes(FunctionalTesting):
    @browsing
    def test_blocks_not_in_add_menu(self, browser):
        page = create(Builder('content page').titled('A Page'))
        browser.login().visit(page)
        self.assertEqual(['ContentPage', 'Media Folder', 'News Folder'],
                         factoriesmenu.addable_types())

        newsfolder = create(Builder('news folder').titled('A News Folder'))

        browser.login().visit(newsfolder)
        self.assertEqual(['ContentPage', 'Media Folder', 'News'],
                         factoriesmenu.addable_types())
