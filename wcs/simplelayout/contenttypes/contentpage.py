from plone.dexterity.content import Container
from plone.schema import JSONField
from wcs.simplelayout import _
from zope.interface import implementer
from zope.interface import Interface
from copy import deepcopy


DEFAULT_SIMPLELAYOUT_CONFIGURATION = {
    'ContentPage': {
        'col-widths': [
            {'cols': 12, 'label': '100%'},
            {'cols': 9, 'label': '75%'},
            {'cols': 8, 'label': '66%'},
            {'cols': 6, 'label': '50%'},
            {'cols': 4, 'label': '33%'},
            {'cols': 3, 'label': '25%'},
        ],
        'row-menu': [
            {'cols': 2, 'label': "2-column row (50%)"},
            {'cols': 3, 'label': "3-column row (33%)"},
            {'cols': 4, 'label': "4-column row (25%)"},
        ],
        'add-single-col': True,
    }
}


class ISimplelayoutConfiguration(Interface):

    config = JSONField(
        title=_('label_simplelayout_configuration', default=u'Globale simplelayout configuration'),
        description=_('help_simplelayout_configuration',
                      default='You can configure global simplelayout options'),
        schema='{"type": "object"}',
        default=deepcopy(DEFAULT_SIMPLELAYOUT_CONFIGURATION)
    )


class IContentPage(Interface):
    """Marker interface for blocks"""


@implementer(IContentPage)
class ContentPage(Container):
    """ Base class for contentpage"""
