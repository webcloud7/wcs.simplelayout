from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from ftw.testbrowser.pages import factoriesmenu
from ftw.testbrowser.pages import statusmessages
from plone.uuid.interfaces import IUUID
from wcs.simplelayout.contenttypes import utils
from wcs.simplelayout.tests import FunctionalTesting
from unittest import TestCase
import json


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

    def test_valid_youtube_nocookie_url(self):
        url = 'https://www.youtube-nocookie.com/embed/UUrddqT9i_s'
        self.assertTrue(utils.is_youtube_nocookie_url(url))


class TestVideoBlock(FunctionalTesting):

    def setUp(self):
        self.page = create(Builder('content page').titled('A page'))

    @browsing
    def test_adding_youtube_videoblock(self, browser):
        browser.login().visit(self.page)
        factoriesmenu.add('VideoBlock')
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
        factoriesmenu.add('VideoBlock')
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
    def test_video_url_invariant(self, browser):
        browser.login().visit(self.page)
        factoriesmenu.add('VideoBlock')
        browser.fill({'Youtube, or Vimeo URL': 'https://example.com'})
        browser.find_button_by_label('Save').click()

        statusmessages.assert_message('There were some errors.')
        self.assertEqual('This is no a valid youtube, or vimeo url.',
                          browser.css('.field.error').first.text)
