from plone.app.event.browser.event_view import EventView
from plone.event.interfaces import IOccurrence
from wcs.simplelayout.browser.simplelayout import SimplelayoutView


class EventPageView(SimplelayoutView, EventView):
    def __call__(self):
        if IOccurrence.providedBy(self.context):
            # The transient Occurrence objects cannot be edited. disable the
            # edit border for them.
            self.request.set("disable_border", True)
        return self.index()  # render me.
