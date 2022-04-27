from plone.dexterity.content import Container
from zope.interface import implementer
from zope.interface import Interface


class IContentPage(Interface):
    """Marker interface for blocks"""


@implementer(IContentPage)
class ContentPage(Container):
    """ Base class for contentpage"""
