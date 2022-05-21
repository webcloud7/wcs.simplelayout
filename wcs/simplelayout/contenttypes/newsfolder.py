from plone.dexterity.content import Container
from zope.interface import implementer
from zope.interface import Interface


class INewsFolder(Interface):
    """Marker interface for blocks"""


@implementer(INewsFolder)
class NewsFolder(Container):
    """ Base class for contentpage"""

    _ordering = 'unordered'
