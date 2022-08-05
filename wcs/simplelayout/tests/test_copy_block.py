from ftw.builder import Builder
from ftw.builder import create
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.tests import FunctionalTesting


class TestCopyBlock(FunctionalTesting):

    def test_copy_page_updates_uids_in_layout(self):
        page = create(Builder('content page').titled('Test page'))
        block1 = create(Builder('block').titled('Block 1').within(page))
        block2 = create(Builder('block').titled('Block 2').within(page))
        block3 = create(Builder('block').titled('Block 3').within(page))

        self.assertEqual(
            {'items': [{'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [block1.UID()],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [block2.UID()],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [block3.UID()],
                                   'width': '12'}]}]},
            ISimplelayout(page).slblocks_layout)

        clipboard = self.portal.manage_copyObjects(ids=[page.getId()])
        info, = self.portal.manage_pasteObjects(clipboard)

        copy_ = self.portal.get(info['new_id'])
        self.assertEqual(
            {'items': [{'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [copy_.objectValues()[0].UID()],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [copy_.objectValues()[1].UID()],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [copy_.objectValues()[2].UID()],
                                   'width': '12'}]}]},
            ISimplelayout(copy_).slblocks_layout)
