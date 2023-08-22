from zope.i18nmessageid import MessageFactory
from plone.app.dexterity.browser.layout import TypeFormLayout


_ = MessageFactory('wcs.simplelayout')


def initialize(context):
    pass

    @property
    def extended_tabs(self):
        return (
            (_("Overview"), "@@overview"),
            (_("Fields"), "@@fields"),
            (_("Behaviors"), "@@behaviors"),
            (_("Block Template"), "@@block_template"),
        )

    TypeFormLayout.tabs = extended_tabs
