from plone import api
from plone.app.querystring.interfaces import IQuerystringRegistryReader
from plone.registry.interfaces import IRegistry
from wcs.simplelayout import _
from zope.component import getUtility
from zope.interface import directlyProvides
from zope.interface import provider
from zope.schema.interfaces import IContextSourceBinder
from zope.schema.interfaces import IVocabularyFactory
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


@provider(IVocabularyFactory)
def default_workflow_states_vocabulary(context):
    wftool = api.portal.get_tool('portal_workflow')
    terms = []
    for workflow_id in wftool.getDefaultChain():
        for state in wftool[workflow_id].states.objectValues():
            title = api.portal.translate(state.title_or_id())
            terms.append(SimpleTerm(state.id, state.id, title))
    return SimpleVocabulary(sorted(terms, key=lambda term: term.title))
