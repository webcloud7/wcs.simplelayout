from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from wcs.simplelayout.tests import FunctionalTesting


class TestNewsFolderView(FunctionalTesting):
    def setUp(self):
        super().setUp()

    @browsing
    def test_news_folder_listing(self, browser):
        newsfolder = create(Builder('news folder').titled('News Folder'))
        for number in range(1, 31):
            create(Builder('news')
                   .titled(f'News {number}')
                   .having(news_date=f'2024-01-{number:02}')
                   .within(newsfolder))

        browser.login()
        browser.visit(newsfolder)

        # Pagination
        self.assertTrue(browser.css('.pagination'), 'There should be a pagination.')

        # Pages in pagination
        self.assertEqual(
            ['1', '2', '3', 'Next 10 items >'],
            browser.css('.pagination').first.css('li').text)

        # News
        self.assertEqual(10, len(browser.css('.list-group a')))
