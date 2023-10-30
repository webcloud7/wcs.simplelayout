from ftw.builder import Builder
from ftw.builder import create
from ftw.testbrowser import browsing
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.tests import FunctionalTesting
import transaction


class TestMoveBlock(FunctionalTesting):

    @browsing
    def test_move_block_updates_uids_in_layout(self, browser):
        page = create(Builder('content page').titled('Test page'))
        page2 = create(Builder('content page').titled('Test page 2'))
        block1 = create(Builder('block').titled('Block 1').within(page))
        block2 = create(Builder('block').titled('Block 2').within(page2))
        block3 = create(Builder('block').titled('Block 3').within(page))

        self.assertDictEqual(
            {'items': [{'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [block1.UID()],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [block3.UID()],
                                   'width': '12'}]}]},
            ISimplelayout(page).slblocks_layout)

        self.assertDictEqual(
            {'items': [{'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [block2.UID()],
                                   'width': '12'}]},
                       ]},
            ISimplelayout(page2).slblocks_layout)

        clipboard = page.manage_cutObjects(ids=[block3.getId()])
        page2.manage_pasteObjects(clipboard)

        self.assertDictEqual(
            {'items': [{'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [block1.UID()],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [],
                                   'width': '12'}]}]},
            ISimplelayout(page).slblocks_layout)

        # Not automatically in the new state
        self.assertDictEqual(
            {'items': [{'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [block2.UID()],
                                   'width': '12'}]},
                       ]},
            ISimplelayout(page2).slblocks_layout)
        transaction.commit()
        # But gets auto appended via the rest api
        browser.login().visit(page2, headers=self.api_headers)
        self.assertDictEqual(
            {'items': [{'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [block2.UID()],
                                   'width': '12'}]},
                       {'@type': 'row',
                        'items': [{'@type': 'col',
                                   'items': [block3.UID()],
                                   'width': '12'}]}
                       ]},
            browser.json['slblocks_layout'])
