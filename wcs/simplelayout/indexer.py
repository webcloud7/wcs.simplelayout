from plone.app.dexterity import textindexer
from plone.app.dexterity.behaviors.metadata import IPublication
from plone.app.dexterity.textindexer.indexer import dynamic_searchable_text_indexer
from plone.indexer import indexer
from wcs.simplelayout.contenttypes.behaviors import IBlockMarker
from wcs.simplelayout.contenttypes.behaviors import INews
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.utils import block_has_dates
from zope.component import adapter
from zope.interface import implementer


@indexer(INews)
def news_start_date(obj):
    return INews(obj).news_date


@implementer(textindexer.IDynamicTextIndexExtender)
@adapter(ISimplelayout)
class SimplelayoutSearchableText(object):

    def __init__(self, context):
        self.context = context

    def __call__(self):
        searchable_text = ''
        for content in self.context.objectValues():
            if IBlockMarker.providedBy(content) and not block_has_dates(content):
                searchable_text += dynamic_searchable_text_indexer(
                    content)()
        return searchable_text
