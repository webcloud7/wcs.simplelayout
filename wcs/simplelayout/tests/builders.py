from ftw.builder import builder_registry
from ftw.builder.dexterity import DexterityBuilder


class ContenPageBuilder(DexterityBuilder):
    portal_type = 'ContentPage'


builder_registry.register('content page', ContenPageBuilder)


class MediaFolderBuilder(DexterityBuilder):
    portal_type = 'MediaFolder'


builder_registry.register('mediafolder', MediaFolderBuilder)


class BlockBuilder(DexterityBuilder):
    portal_type = 'Block'


builder_registry.register('block', BlockBuilder)


class VideoBlockBuilder(DexterityBuilder):
    portal_type = 'VideoBlock'


builder_registry.register('video block', VideoBlockBuilder)
