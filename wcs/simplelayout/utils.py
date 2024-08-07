from AccessControl.SecurityManagement import getSecurityManager
from contextlib import contextmanager
from copy import deepcopy
from DateTime import DateTime
from lxml import etree
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
        return bool(effective) or bool(expires)
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


def add_layout_properties(obj, state):
    for row in state['slblocks_layout'].get('items', []):
        row['properties'] = {}
        row['properties']['css_classes'] = []

        row['properties']['single_column'] = len(row['items']) == 1
        if row['properties']['single_column']:
            row['properties']['css_classes'].append('single-column')
        row['properties']['columns'] = len(row['items'])
        row['properties']['css_classes'].append(f'columns-{row["properties"]["columns"]}')

        for column in row['items']:
            if row['properties']['columns'] != 1:
                continue
            single_block = len(column['items']) == 1
            if single_block:
                block_uid = column['items'][0]
                block = state['slblocks'].get(block_uid, None)
                row['properties']['single_block'] = True
                row['properties']['css_classes'].append('single-block')
                if block and 'text' in block and not block['text']:
                    row['properties']['title_only_block'] = True
                    row['properties']['css_classes'].append('title-only-block')
                else:
                    row['properties']['title_only_block'] = False
            else:
                row['properties']['single_block'] = False


@contextmanager
def disable_block_cache():
    os.environ['SIMPLELAYOUT_DISABLE_BLOCK_CACHE'] = '1'
    yield
    del os.environ['SIMPLELAYOUT_DISABLE_BLOCK_CACHE']


def convert_table_to_json(table):

    def _convert_style_attr(attrs):
        if 'style' in attrs:
            try:
                attrs['style'] = dict(
                    (key.strip(), value.strip()) for key, value in
                    (item.split(':') for item in attrs['style'].split(';') if item))
            except Exception:
                pass

    def _add_width_from_colgroup_to_cell(col, attrs):
        width = None
        col_attrs = dict(col.attrib)
        _convert_style_attr(col_attrs)

        width = col_attrs.get('style', {}).get('width', None)

        if width is None:
            return

        if 'style' in attrs:
            attrs['style']['width'] = width
        else:
            attrs['style'] = {'width': width}

    parser = etree.HTMLParser()
    document = etree.fromstring(table, parser=parser)
    result = {"@type": "table", "rows": []}
    result['attrs'] = dict(document.xpath('//table')[0].attrib)

    cols = document.xpath('//col')

    _convert_style_attr(result['attrs'])

    for row in document.xpath('//tr'):
        row_data = {"@type": "row", "cells": []}
        row_data['attrs'] = dict(row.attrib)
        _convert_style_attr(row_data['attrs'])

        for index, cell in enumerate(row.xpath('.//td|.//th')):
            cell_data = {"@type": "cell", "content": cell.text, "header": cell.tag == 'th'}
            cell_data['attrs'] = dict(cell.attrib)
            _convert_style_attr(cell_data['attrs'])

            if len(cols) - 1 >= index:
                _add_width_from_colgroup_to_cell(cols[index], cell_data['attrs'])
            row_data['cells'].append(cell_data)

        result['rows'].append(row_data)
    return result
