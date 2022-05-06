from plone import api
from plone.dexterity.interfaces import IDexterityFTI
from plone.i18n.normalizer.interfaces import IIDNormalizer
from wcs.simplelayout.contenttypes.behaviors import IBlockMarker
from zope.component import getUtility


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
