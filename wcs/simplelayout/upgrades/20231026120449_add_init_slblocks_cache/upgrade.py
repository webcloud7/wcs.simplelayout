from collective.ftw.upgrade import UpgradeStep
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.restapi.serializer import get_blocks
from zope.component import queryMultiAdapter
from z3c.form.interfaces import IDataManager


class AddInitSlblocksCache(UpgradeStep):
    """Add init slblocks_cache.
    """

    def __call__(self):
        query = {'object_provides': ISimplelayout.__identifier__}
        for obj in self.objects(query, 'Add init slblocks_cache.'):
            blocks = get_blocks(obj, for_cache=True)
            result = {block['UID']: block for block in blocks}

            dm = queryMultiAdapter(
                (obj, ISimplelayout.get('slblocks_cache')), IDataManager
            )
            dm.set(result)

        self.install_upgrade_profile()
