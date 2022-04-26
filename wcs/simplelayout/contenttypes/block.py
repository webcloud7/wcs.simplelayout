from plone.dexterity.content import Container
from zope.interface import implementer
from zope.interface import Interface


class IBlock(Interface):
    """Marker interface for blocks"""


@implementer(IBlock)
class Block(Container):
    """Base class for blocks"""
