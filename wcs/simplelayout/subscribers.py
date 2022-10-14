from Acquisition import aq_inner
from Acquisition import aq_parent
from plone.uuid.interfaces import IUUID
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
import json


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

    if event.newParent is None:
        # Be sure it's not cut/paste
        block_uid = IUUID(block)
        parent = aq_parent(aq_inner(block))

        # Do nothing if the event wasn't fired by the block's parent.
        # This happens when an ancestor is deleted, e.g. the Plone site itself.
        if parent is not event.oldParent:
            return

    if not ISimplelayout(parent, None):
        return

    page_layout = ISimplelayout(parent).slblocks_layout
    new_page_layout = json.dumps(page_layout) \
        .replace(f', "{block_uid}"', '') \
        .replace(f'"{block_uid}", ', '') \
        .replace(f'"{block_uid}"', '')
    ISimplelayout(parent).slblocks_layout = json.loads(new_page_layout)
