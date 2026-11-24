from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from ftw.testbrowser.pages import statusmessages
from wcs.simplelayout.contenttypes import utils
from wcs.simplelayout.tests import FunctionalTesting
from unittest import TestCase


class TestVideoValidators(TestCase):

    def test_valid_youtube_url(self):
        url = 'https://youtu.be/W42x6-Wf3Cs'
        self.assertTrue(utils.is_youtube_url(url))

        url = 'http://youtu.be/W42x6-Wf3Cs'
        self.assertTrue(utils.is_youtube_url(url))

    def test_invalid_youtube_url(self):
        url = 'https://example.com/W42x6-Wf3Cs'
        self.assertFalse(utils.is_youtube_url(url))

        url = 'https://example.com/W42x6-Wf3Cs/something'
        self.assertFalse(utils.is_youtube_url(url))

        url = 'https://youtu.be/W42x6-Wf3Cs/something'
        self.assertFalse(utils.is_youtube_url(url))

        url = 'https://youtu.be'
        self.assertFalse(utils.is_youtube_url(url))

        url = 'https://youtu.be/'
        self.assertFalse(utils.is_youtube_url(url))

    def test_valid_vimeo_url(self):
        url = 'https://vimeo.com/channels/staffpicks/128510631'
        self.assertTrue(utils.is_vimeo_url(url))

        url = 'http://vimeo.com/channels/staffpicks/128510631'
        self.assertTrue(utils.is_vimeo_url(url))

    def test_invalid_vimeo_url(self):
        url = 'https://vimeo.com/channels/staffpicks/128510631something'
        self.assertFalse(utils.is_vimeo_url(url))

        url = 'https://example.com/channels/staffpicks/128510631'
        self.assertFalse(utils.is_vimeo_url(url))

        url = 'http://vimeo.com/channels/staffpicks/128510631/someting'
        self.assertFalse(utils.is_vimeo_url(url))

        url = 'http://vimeo.com'
        self.assertFalse(utils.is_vimeo_url(url))

        url = 'http://vimeo.com/channels/'
        self.assertFalse(utils.is_vimeo_url(url))

    def test_valid_vimeo_player_url(self):
        urls = [
            'https://player.vimeo.com/video/722256136',
            'http://player.vimeo.com/video/722256136',
            'https://player.vimeo.com/video/722256136?h=abc123',
        ]
        for url in urls:
            with self.subTest(url=url):
                self.assertTrue(utils.is_vimeo_url(url),
                                msg=f'{url} should be a valid vimeo url')

    def test_valid_vimeo_url_without_channel(self):
        url = 'https://vimeo.com/722256136'
        self.assertTrue(utils.is_vimeo_url(url),
                        msg=f'{url} should be a valid vimeo url')

    def test_invalid_vimeo_player_url(self):
        urls = [
            'https://player.vimeo.com/video/abc',
            'https://player.vimeo.com/foo/722256136',
            'https://player.vimeo.com/video/722256136/extra',
            'https://player.vimeo.com/722256136',
            'https://player.vimeo.com/video/',
        ]
        for url in urls:
            with self.subTest(url=url):
                self.assertFalse(utils.is_vimeo_url(url),
                                 msg=f'{url} should not be a valid vimeo url')

    def test_valid_youtube_nocookie_url(self):
        url = 'https://www.youtube-nocookie.com/embed/UUrddqT9i_s'
        self.assertTrue(utils.is_youtube_nocookie_url(url))


class TestVideoBlock(FunctionalTesting):

    def setUp(self):
        self.page = create(Builder('content page').titled('A page'))

    @browsing
    def test_adding_youtube_videoblock(self, browser):
        browser.login().visit(self.page)
        browser.visit(self.page, view='++add++VideoBlock')
        browser.fill(
            {
                'Title': 'Youtube Video',
                'Youtube, or Vimeo URL': 'https://youtu.be/W42x6-Wf3Cs'
            }
        )
        browser.find_button_by_label('Save').click()

        blocks = self.page.objectValues()
        self.assertEqual(1, len(blocks))
        self.assertEqual(blocks[0].Title(), 'Youtube Video')
        self.assertEqual(blocks[0].video_url, 'https://youtu.be/W42x6-Wf3Cs')

    @browsing
    def test_adding_vimeo_videoblock(self, browser):
        browser.login().visit(self.page)
        browser.visit(self.page, view='++add++VideoBlock')
        browser.fill(
            {
                'Title': 'Vimeo Video',
                'Youtube, or Vimeo URL': 'https://vimeo.com/channels/staffpicks/128510631'
            }
        )
        browser.find_button_by_label('Save').click()
        
        blocks = self.page.objectValues()
        self.assertEqual(1, len(blocks))
        self.assertEqual(blocks[0].Title(), 'Vimeo Video')
        self.assertEqual(blocks[0].video_url, 'https://vimeo.com/channels/staffpicks/128510631')

    @browsing
    def test_adding_vimeo_player_videoblock(self, browser):
        url = 'https://player.vimeo.com/video/722256136'
        browser.login().visit(self.page, view='++add++VideoBlock')
        browser.fill(
            {
                'Title': 'Vimeo Player Video',
                'Youtube, or Vimeo URL': url
            }
        )
        browser.find_button_by_label('Save').click()

        blocks = self.page.objectValues()
        self.assertEqual(1, len(blocks),
                         msg='Expected exactly one video block to be created')
        self.assertEqual(blocks[0].Title(), 'Vimeo Player Video',
                         msg='Video block title was not stored')
        self.assertEqual(blocks[0].video_url, url,
                         msg='Vimeo player url should be stored verbatim')

    @browsing
    def test_video_url_field_hints_vimeo_player_format(self, browser):
        browser.login().visit(self.page, view='++add++VideoBlock')

        help_text = browser.css(
            '#formfield-form-widgets-IVideoUrl-video_url .form-text').first.text
        self.assertIn('https://player.vimeo.com/video/VIDEO_ID', help_text,
                      msg=f'Video url help text should hint the vimeo player format, got: {help_text}')

    @browsing
    def test_video_url_invariant(self, browser):
        browser.login().visit(self.page)
        browser.visit(self.page, view='++add++VideoBlock')
        browser.fill({'Youtube, or Vimeo URL': 'https://example.com'})
        browser.find_button_by_label('Save').click()

        statusmessages.assert_message('There were some errors.')
        self.assertEqual('This is no a valid youtube, or vimeo url.',
                          browser.css('.field.error').first.text)
