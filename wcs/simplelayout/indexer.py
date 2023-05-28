from plone.app.dexterity import textindexer
from plone.indexer import indexer
from plone.app.dexterity.textindexer.indexer import dynamic_searchable_text_indexer
from wcs.simplelayout.contenttypes.behaviors import INews
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.contenttypes.behaviors import IBlockMarker
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
            if IBlockMarker.providedBy(content):
                searchable_text += dynamic_searchable_text_indexer(
                    content)()
        return searchable_text
        
