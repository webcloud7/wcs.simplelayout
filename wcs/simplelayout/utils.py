from AccessControl.SecurityManagement import getSecurityManager
from contextlib import contextmanager
from copy import deepcopy
from DateTime import DateTime
from plone import api
from plone.api.exc import CannotGetPortalError
from plone.app.dexterity.behaviors.metadata import IPublication
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
    try:
        types_tool = api.portal.get_tool('portal_types')
    except CannotGetPortalError:
        return ()

    dexterity_ftis = filter(
        IDexterityFTI.providedBy, types_tool.objectValues())

    return tuple(filter(
        lambda fti: IBlockMarker.__identifier__ in fti.behaviors,
        dexterity_ftis))


def normalize_portal_type(portal_type):
    normalizer = getUtility(IIDNormalizer)
    return normalizer.normalize(portal_type)


def block_has_dates(obj):
    if IPublication(obj, None):
        effective = IPublication(obj).effective
        expires = IPublication(obj).expires
        return bool(effective), bool(expires)
    return False


def any_block_has_dates(page):
    for item in page.objectValues():
        is_block = IBlockMarker.providedBy(item)
        can_access = getSecurityManager().checkPermission('View', item)
        if is_block and can_access and block_has_dates(item):
            return True
    return False


def can_access_inactive_blocks(obj):
    def _get_dx_publication_dates(obj):
        publication = IPublication(obj, None)
        if not publication:  # IPublication is not supported
            return None, None

        effective = publication.effective
        expiration = publication.expires

        # convert from datetime to DateTime as used by archetypes
        return DateTime(effective) if effective else None, \
            DateTime(expiration) if expiration else None

    effective_date, expiration_date = _get_dx_publication_dates(obj)

    if not effective_date and not expiration_date:
        return True

    now = DateTime()

    if not api.user.has_permission('Access inactive portal content') and expiration_date:
        if now > expiration_date:
            return False

    if not api.user.has_permission('Access inactive portal content') and effective_date:
        if now < effective_date:
            return False

    return True


def list_blocks_from_page(page):
    for item in page.objectValues():
        is_block = IBlockMarker.providedBy(item)
        can_access = getSecurityManager().checkPermission('View', item)
        filter_inactive = can_access_inactive_blocks(item)
        if is_block and can_access and filter_inactive:
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
