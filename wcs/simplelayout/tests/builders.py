from ftw.builder import builder_registry
from ftw.builder.dexterity import DexterityBuilder


class ContenPageBuilder(DexterityBuilder):
    portal_type = 'ContentPage'


builder_registry.register('content page', ContenPageBuilder)


class BlockBuilder(DexterityBuilder):
    portal_type = 'Block'


builder_registry.register('block', BlockBuilder)
