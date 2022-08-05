from ftw.builder import Builder
from ftw.builder import create
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.tests import FunctionalTesting


class TestDeleteBlock(FunctionalTesting):
    def setUp(self):
        super().setUp()
        self.page = create(Builder('content page').titled('Test page'))
        self.block1 = create(Builder('block').titled('Block 1').within(self.page))
        self.block2 = create(Builder('block').titled('Block 2').within(self.page))
        self.block3 = create(Builder('block').titled('Block 3').within(self.page))

    def test_delete_block_removes_last_block_from_layout(self):

        self.assertEqual(
            {'items': [{'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [self.block1.UID()],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [self.block2.UID()],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [self.block3.UID()],
                                   'width': '12'}]}]},
            ISimplelayout(self.page).slblocks_layout)

        self.page.manage_delObjects(ids=[self.block2.getId()])
        self.assertEqual(
            {'items': [{'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [self.block1.UID()],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [self.block3.UID()],
                                   'width': '12'}]}]},
            ISimplelayout(self.page).slblocks_layout)

    def test_delete_block_removes_block_from_layout(self):

        state = {'items': [{'@type': 'row',
                            'items': [{'@type': 'col',
                                       'items': [self.block1.UID(), self.block3.UID()],
                                       'width': '12'}]}]}
        ISimplelayout(self.page).slblocks_layout = state

        self.page.manage_delObjects(ids=[self.block1.getId()])
        self.assertEqual(
            {'items': [{'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [self.block3.UID()],
                                   'width': '12'}]}]},
            ISimplelayout(self.page).slblocks_layout)
