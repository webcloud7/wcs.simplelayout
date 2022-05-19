from plone.app.querystring.interfaces import IQuerystringRegistryReader
from plone.registry.interfaces import IRegistry
from wcs.simplelayout import _
from zope.component import getUtility
from zope.interface import directlyProvides
from zope.schema.interfaces import IContextSourceBinder
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary


def createTerm(item):
    return SimpleVocabulary.createTerm(item[0], item[0], item[1]['title'])


def sort_index_vocabulary(context):
    registry = getUtility(IRegistry)
    config = IQuerystringRegistryReader(registry)
    indexes = config.parseRegistry()
    indexes = config.mapSortableIndexes(indexes)
    terms = [createTerm(item) for item in  indexes.get('sortable').items()]
    return SimpleVocabulary(terms)


directlyProvides(sort_index_vocabulary, IContextSourceBinder)


sort_order_vocabulary = SimpleVocabulary([
    SimpleTerm(value='ascending',
               title=_(u'label_ascending', default=u'Ascending')),
    SimpleTerm(value='descending',
               title=_(u'label_descending', default=u'Descending'))
])
