from datetime import datetime
from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from zope.component import getUtility
from plone.registry.interfaces import IRegistry
from wcs.simplelayout.tests import FunctionalTesting
import pytz
import transaction


TEST_TIMEZONE = "Europe/Vienna"


class TestEventsFolderView(FunctionalTesting):
    def setUp(self):
        super().setUp()
        self._set_timezone(TEST_TIMEZONE)
        self.eventsfolder = create(Builder('events folder').titled('Events Folder'))
        transaction.commit()

    def _set_timezone(self, tz):
        # Set the portal timezone
        if tz is None:
            return None
        reg = getUtility(IRegistry)
        current_tz = reg.get("plone.portal_timezone", None)
        reg["plone.portal_timezone"] = tz
        return current_tz

    @browsing
    def test_events_folder_listing(self, browser):
        year = datetime.now().year + 1
        tz = pytz.timezone(TEST_TIMEZONE)
        for number in range(1, 31):
            create(Builder('eventpage')
                   .titled(f'Event {number}')
                   .having(start=datetime(year, 1, number, 10, 0, 0, tzinfo=tz),
                           end=datetime(year, 1, number, 11, 0, 0, tzinfo=tz))
                   .within(self.eventsfolder))

        browser.login().visit(self.eventsfolder)

        # Pagination
        self.assertTrue(browser.css('.pagination'), 'There should be a pagination.')

        # Pages in pagination
        self.assertEqual(
            ['1', '2', '3', 'Next 10 items >'],
            browser.css('.pagination').first.css('li').text)

        # Eventpages
        self.assertEqual(10, len(browser.css('.vevent.tileItem')))

    @browsing
    def test_eventpage(self, browser):
        year = datetime.now().year + 1
        tz = pytz.timezone(TEST_TIMEZONE)
        event = create(Builder('eventpage')
                       .titled('Event')
                       .having(start=datetime(year, 1, 1, 10, 0, 0, tzinfo=tz),
                               end=datetime(year, 1, 1, 11, 0, 0, tzinfo=tz))
                       .within(self.eventsfolder))

        browser.login().visit(event)
        import pdb; pdb.set_trace()
        self.assertTrue(browser.css('.simplelayout-app'), 'Expect sl app on event page')
