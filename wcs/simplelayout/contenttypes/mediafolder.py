from plone.dexterity.content import Container
from zope.interface import implementer
from zope.interface import Interface


class IMediaFolder(Interface):
    """Marker for mediafolders"""


@implementer(IMediaFolder)
class MediaFolder(Container):
    """ Base class for mediafolder"""
