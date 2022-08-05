from copy import deepcopy
from plone import api
from plone.dexterity.interfaces import IDexterityFTI
from plone.i18n.normalizer.interfaces import IIDNormalizer
from wcs.simplelayout.contenttypes.behaviors import IBlockMarker
from zope.component import getUtility
import logging


LOG = logging.getLogger('simplelayout')


ROW_TEMPLATE = {
        "@type": "row",
        "items": [
            {
                "@type": "col",
                "width": "12",
                "items": []
            }
        ]
    }


def get_block_types():
    types_tool = api.portal.get_tool('portal_types')

    dexterity_ftis = filter(
        IDexterityFTI.providedBy, types_tool.objectValues())

    return tuple(filter(
        lambda fti: IBlockMarker.__identifier__ in fti.behaviors,
        dexterity_ftis))


def normalize_portal_type(portal_type):
    normalizer = getUtility(IIDNormalizer)
    return normalizer.normalize(portal_type)


def add_missing_blocks(obj, state):
    """
    This function adds missing blocks from the page to the page state.
    """
    backup = deepcopy(ROW_TEMPLATE)

    query = {
        'path': {'depth': 1, 'query': '/'.join(obj.getPhysicalPath())},
        'object_provides': IBlockMarker.__identifier__,
    }
    catalog = api.portal.get_tool('portal_catalog')
    uids = [item.UID for item in catalog(**query)]

    for uid in uids:
        if uid not in str(state):
            backup['items'][0]['items'].append(uid)
    if len(backup['items'][0]['items']):
        state['items'].append(backup)
        LOG.info(f'Amended {len(backup["items"][0]["items"])} blocks '
                 f'on {obj.absolute_url()}')
