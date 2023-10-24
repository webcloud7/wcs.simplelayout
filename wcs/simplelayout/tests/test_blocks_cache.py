from ftw.builder import Builder
from ftw.builder import create
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.tests import FunctionalTesting
from wcs.simplelayout.restapi.serializer import get_blocks
from z3c.relationfield.relation import RelationValue
from zope.component import getUtility
from zope.intid.interfaces import IIntIds
import transaction


class TestBlocksCache(FunctionalTesting):
    def setUp(self):
        super().setUp()
        self.intids = getUtility(IIntIds)
        self.grant('Manager')
        self.layout, self.block1, self.block2 = self._setup_blocks_with_layout()

    def _setup_blocks_with_layout(self):
        self.page = create(Builder('content page').titled('Test page'))
        block1 = create(Builder('block').titled('Block 1').within(self.page))
        block2 = create(Builder('block').titled('Block 2').within(self.page))

        layout = {
            'items': [
                {
                    '@type': 'row',
                    'items': [
                        {
                            '@type': 'col',
                            'items': [block1.UID()],
                            'width': '6'
                        },
                        {
                            '@type': 'col',
                            'items': [block2.UID()],
                            'width': '6'
                        }
                    ]
                }
            ]
        }
        ISimplelayout(self.page).slblocks_layout = layout
        transaction.commit()
        return layout, block1, block2

    def test_make_sure_cached_repr_has_only_minimal_infos(self):
        blocks = get_blocks(self.page, for_cache=True)
        result = {block['UID']: block for block in blocks}
        self.assertNotIn('@components', result[self.block1.UID()])

        self.assertNotIn('@components', result[self.block2.UID()])

        self.assertNotIn('previous_item', result[self.block2.UID()])
        self.assertNotIn('next_item', result[self.block2.UID()])
        self.assertNotIn('working_copy', result[self.block2.UID()])
        self.assertNotIn('allow_discussion', result[self.block2.UID()])

        self.assertEqual(self.block1.absolute_url(), result[self.block1.UID()]['@id'])
        self.assertEqual(self.block1.id, result[self.block1.UID()]['id'])
        self.assertEqual(self.block1.portal_type, result[self.block1.UID()]['@type'])
        self.assertEqual('Block', result[self.block1.UID()]['type_title'])

        self.assertNotIn('parent', result[self.block1.UID()])
        self.assertNotIn('review_state', result[self.block1.UID()])
        self.assertNotIn('layout', result[self.block1.UID()])

    def test_make_sure_fields_with_permissions_are_not_serialized(self):
        mediafolder = create(Builder('mediafolder')
                             .titled('Mediafolder')
                             .within(self.page))
        listing = create(Builder('file listing block')
                         .titled('Listing')
                         .having(mediafolder=RelationValue(self.intids.getId(mediafolder)))
                         .within(self.page))

        blocks = get_blocks(self.page, for_cache=True)
        result = {block['UID']: block for block in blocks}

        self.assertNotIn('mediafolder', result[listing.UID()])

        rebular_blocks = get_blocks(self.page, for_cache=False)
        regular_result = {block['UID']: block for block in rebular_blocks}
        self.assertIn('mediafolder', regular_result[listing.UID()])

    def test_listingblocks_never_include_items_in_cache(self):
        mediafolder = create(Builder('mediafolder')
                             .titled('Mediafolder')
                             .within(self.page))
        create(Builder('file').within(mediafolder).with_dummy_content())
        create(Builder('image').within(mediafolder).with_dummy_content())
        filelisting = create(Builder('file listing block')
                             .titled('Listing')
                             .having(mediafolder=RelationValue(self.intids.getId(mediafolder)))
                             .within(self.page))
        imagelisting = create(Builder('image listing block')
                              .titled('Listing')
                              .having(mediafolder=RelationValue(self.intids.getId(mediafolder)))
                              .within(self.page))

        blocks = get_blocks(self.page, for_cache=True)
        result = {block['UID']: block for block in blocks}

        self.assertNotIn('items', result[filelisting.UID()])
        self.assertNotIn('items', result[imagelisting.UID()])

        self.portal.REQUEST.form['include_items'] = '1'
        rebular_blocks = get_blocks(self.page, for_cache=False)
        regular_result = {block['UID']: block for block in rebular_blocks}

        self.assertIn('items', regular_result[filelisting.UID()])
        self.assertIn('items', regular_result[imagelisting.UID()])

        self.assertEqual(2, len(regular_result[filelisting.UID()]['items']))
        self.assertEqual(1, len(regular_result[imagelisting.UID()]['items']))

    def test_newslisting_never_include_items_in_cache(self):
        newsfolder = create(Builder('news folder')
                            .titled('Newsfolder')
                            .within(self.page))
        create(Builder('news').within(newsfolder))
        newslisting = create(Builder('news listing block')
                             .titled('News listing')
                             .within(self.page))

        blocks = get_blocks(self.page, for_cache=True)
        result = {block['UID']: block for block in blocks}

        self.assertNotIn('items', result[newslisting.UID()])

        self.portal.REQUEST.form['include_items'] = '1'
        rebular_blocks = get_blocks(self.page, for_cache=False)
        regular_result = {block['UID']: block for block in rebular_blocks}

        self.assertIn('items', regular_result[newslisting.UID()])
        self.assertEqual(1, len(regular_result[newslisting.UID()]['items']))

    def test_allpurposelisingblock_never_include_items_in_cache(self):
        listing = create(Builder('all purpose listing block')
                         .titled('Listing')
                         .having(query=[{'i': 'portal_type', 'o': 'plone.app.querystring.operation.selection.any', 'v': ['ContentPage']}])
                         .within(self.page))
        blocks = get_blocks(self.page, for_cache=True)
        result = {block['UID']: block for block in blocks}

        self.assertNotIn('items', result[listing.UID()])

        self.portal.REQUEST.form['include_items'] = '1'
        rebular_blocks = get_blocks(self.page, for_cache=False)
        regular_result = {block['UID']: block for block in rebular_blocks}

        self.assertIn('items', regular_result[listing.UID()])
        self.assertEqual(1, len(regular_result[listing.UID()]['items']))
