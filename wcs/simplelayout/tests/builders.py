from ftw.builder import builder_registry
from ftw.builder import create
from ftw.builder.dexterity import DexterityBuilder
from operator import methodcaller
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.utils import add_missing_blocks
import transaction


class ContenPageBuilder(DexterityBuilder):
    portal_type = 'ContentPage'

    def __init__(self, session):
        super().__init__(session)
        self.block_builders = []

    def with_blocks(self, *block_builders):
        self.block_builders.extend(block_builders)
        return self

    def after_create(self, obj):
        if self.block_builders:
            [create(item) for item in map(methodcaller('within', obj), self.block_builders)]
        return super().after_create(obj)


builder_registry.register('content page', ContenPageBuilder)


class MediaFolderBuilder(DexterityBuilder):
    portal_type = 'MediaFolder'


builder_registry.register('mediafolder', MediaFolderBuilder)


class NewsFolderBuilder(DexterityBuilder):
    portal_type = 'NewsFolder'


builder_registry.register('news folder', NewsFolderBuilder)


class NewsBuilder(DexterityBuilder):
    portal_type = 'News'


builder_registry.register('news', NewsBuilder)


class EventsFolderBuilder(DexterityBuilder):
    portal_type = 'EventsFolder'


builder_registry.register('events folder', EventsFolderBuilder)


class EventPageBuilder(DexterityBuilder):
    portal_type = 'EventPage'


builder_registry.register('eventpage', EventPageBuilder)


class BlockBuilder(DexterityBuilder):
    portal_type = 'Block'

    def after_create(self, obj):
        parent = obj.aq_parent
        value = ISimplelayout(parent).slblocks_layout
        add_missing_blocks(parent, value)
        ISimplelayout(parent).slblocks_layout = value
        transaction.commit()
        return super().after_create(obj)


builder_registry.register('block', BlockBuilder)


class VideoBlockBuilder(BlockBuilder):
    portal_type = 'VideoBlock'


builder_registry.register('video block', VideoBlockBuilder)


class NewsListingBlockBuilder(BlockBuilder):
    portal_type = 'NewsListingBlock'


builder_registry.register('news listing block', NewsListingBlockBuilder)


class FileListingBlockBuilder(BlockBuilder):
    portal_type = 'FileListingBlock'


builder_registry.register('file listing block', FileListingBlockBuilder)


class ImageListingBlockBuilder(BlockBuilder):
    portal_type = 'ImageListingBlock'


builder_registry.register('image listing block', ImageListingBlockBuilder)


class AllPurposeBlockBuilder(BlockBuilder):
    portal_type = 'AllPurposeListingBlock'


builder_registry.register('all purpose listing block', AllPurposeBlockBuilder)


class TableBlockBuilder(BlockBuilder):
    portal_type = 'TableBlock'


builder_registry.register('table block', TableBlockBuilder)
