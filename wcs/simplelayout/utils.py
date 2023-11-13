from AccessControl.SecurityManagement import getSecurityManager
from contextlib import contextmanager
from copy import deepcopy
from plone import api
from plone.dexterity.interfaces import IDexterityFTI
from plone.i18n.normalizer.interfaces import IIDNormalizer
from wcs.simplelayout.contenttypes.behaviors import IBlockMarker
from zope.component import getUtility
import logging
import os


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


def list_blocks_from_page(page):
    for item in page.objectValues():
        is_block = IBlockMarker.providedBy(item)
        if is_block and getSecurityManager().checkPermission('View', item):
            yield item


def add_missing_blocks(obj, state):
    """
    This function adds missing blocks from the page to the page state.
    """
    backup = deepcopy(ROW_TEMPLATE)
    uids = [item.UID() for item in list_blocks_from_page(obj)]

    for uid in uids:
        if uid not in str(state):
            backup['items'][0]['items'].append(uid)
    if len(backup['items'][0]['items']):
        state['items'].append(backup)
        LOG.info(f'Amended {len(backup["items"][0]["items"])} blocks '
                 f'on {obj.absolute_url()}')


@contextmanager
def disable_block_cache():
    os.environ['SIMPLELAYOUT_DISABLE_BLOCK_CACHE'] = '1'
    yield
    del os.environ['SIMPLELAYOUT_DISABLE_BLOCK_CACHE']
