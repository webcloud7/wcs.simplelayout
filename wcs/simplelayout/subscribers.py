from Acquisition import aq_inner
from Acquisition import aq_parent
from plone.uuid.interfaces import IUUID
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.restapi.serializer import get_blocks
from wcs.simplelayout.utils import any_block_has_dates
from z3c.form.interfaces import IDataManager
from z3c.form.interfaces import IManagerValidator
from zope.annotation.interfaces import IAnnotations
from zope.component import queryMultiAdapter
import json
import logging
import os


LOG = logging.getLogger(__name__)


def update_page_state_on_copy_paste_block(block, event):
    """Update the uid of the new created block in the page state.
    block: new block
    event.original: origin of the copy event - usually the simplelayout page"""
    parent = aq_parent(block)
    original_parent = event.original

    if not parent:
        return

    if len(parent.getPhysicalPath()) > 1:
        # If we are in a child page of the copied page get the actual parent
        original_parent = event.original.restrictedTraverse(
            '/'.join(parent.getPhysicalPath()[1:]))

    # Only update page state, if the original object is a Simplelayout page.
    if not ISimplelayout.providedBy(original_parent):
        return

    origin_block_uid = IUUID(original_parent.get(block.id))
    page_layout = ISimplelayout(parent).slblocks_layout

    new_block_uid = IUUID(block)
    ISimplelayout(parent).slblocks_layout = json.loads(
        json.dumps(page_layout).replace(origin_block_uid, new_block_uid))


def update_page_state_on_block_remove(block, event):

    # This is registered as move event, which triggers add and remove.
    # We only want to trigger this upon removal.

    if event.__class__.__name__ == 'ObjectAddedEvent':
        return

    if event.newParent is None:
        # Be sure it's not cut/paste
        parent = aq_parent(aq_inner(block))

        # Do nothing if the event wasn't fired by the block's parent.
        # This happens when an ancestor is deleted, e.g. the Plone site itself.
        if parent is not event.oldParent:
            return
    else:
        # Assume block has been moved
        parent = event.oldParent

    if not ISimplelayout(parent, None):
        return

    block_uid = IUUID(block)
    page_layout = ISimplelayout(parent).slblocks_layout
    new_page_layout = json.dumps(page_layout) \
        .replace(f', "{block_uid}"', '') \
        .replace(f'"{block_uid}", ', '') \
        .replace(f'"{block_uid}"', '')
    ISimplelayout(parent).slblocks_layout = json.loads(new_page_layout)


def cache_blocks(block, event):
    if os.environ.get('SIMPLELAYOUT_DISABLE_BLOCK_CACHE', None) == '1':
        return

    if not hasattr(block, 'aq_parent'):
        # Parent already got deleted
        return

    parents = [block.aq_parent]

    if getattr(event, 'oldParent', None) is not None:
        parents.append(event.oldParent)

    for parent in parents:
        if not ISimplelayout.providedBy(parent):
            continue

        annotations = IAnnotations(parent)
        if 'wcs.backend.trash.info' in annotations:
            return

        dm = queryMultiAdapter((parent, ISimplelayout.get('slblocks_cache')), IDataManager)

        if any_block_has_dates(parent):
            dm.set({})
            return

        blocks = []
        try:
            blocks = get_blocks(parent, for_cache=True)
        except Exception as e:
            LOG.warn(f'Error while caching blocks: {e}')
        result = {block['UID']: block for block in blocks}

        validator = queryMultiAdapter(
            (parent, parent.REQUEST, None, ISimplelayout, None), IManagerValidator
        )

        if validator.validate(result):
            raise Exception('Validation error')

        dm.set(result)
