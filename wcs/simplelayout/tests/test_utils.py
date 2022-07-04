from wcs.simplelayout.tests import FunctionalTesting
from wcs.simplelayout.utils import get_block_types


class TestSampleTypes(FunctionalTesting):

    def test_get_block_types(self):
        block_ids = (
            'Block',
            'VideoBlock',
            'FileListingBlock',
            'ImageListingBlock',
            'NewsListingBlock'
        )
        self.assertEqual(
            block_ids,
            tuple(map(lambda fti: fti.getId(), get_block_types()))
        )
