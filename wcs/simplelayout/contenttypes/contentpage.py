from ftw.simplelayout.contenttypes.contents.interfaces import IContentPage
from plone.dexterity.content import Container
from zope.interface import implements


class ContentPage(Container):
    implements(IContentPage)
