from plone.indexer import indexer
from wcs.simplelayout.contenttypes.behaviors import INews


@indexer(INews)
def news_start_date(obj):
    return INews(obj).news_date
