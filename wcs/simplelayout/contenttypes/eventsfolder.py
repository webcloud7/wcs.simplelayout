from plone.dexterity.content import Container
from zope.interface import implementer
from zope.interface import Interface


class IEventsFolder(Interface):
    """Marker interface for blocks"""


@implementer(IEventsFolder)
class EventsFolder(Container):
    """ Base class for contentpage"""

    _ordering = 'unordered'
