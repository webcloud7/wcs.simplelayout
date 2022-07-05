from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from ftw.testbrowser.pages import factoriesmenu
from ftw.testbrowser.pages import plone
from wcs.simplelayout.tests import FunctionalTesting


class TestMediaFolderReference(FunctionalTesting):
    @browsing
    def test_add_default_block(self, browser):
        contentpage = create(Builder('content page').titled(u'A page'))
        mediafolder = create(Builder('mediafolder').titled(u'A media folder'))
        browser.login().visit(contentpage)
        factoriesmenu.add('FileListingBlock')
        browser.fill({'Title': u'This is a Block',
                      'Mediafolder reference': mediafolder})
        browser.find_button_by_label('Save').click()

        block = contentpage.objectValues()[0]
        self.assertEqual(mediafolder, block.mediafolder.to_object)

