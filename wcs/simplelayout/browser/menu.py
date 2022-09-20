from plone import api
from plone.app.contentmenu.menu import FactoriesMenu
from plone.app.contentmenu.menu import FactoriesSubMenuItem
from wcs.simplelayout.contenttypes.behaviors import IBlockMarker


class SimplelayoutFactoriesSubMenuItem(FactoriesSubMenuItem):
    submenuId = "plone_contentmenu_factory_simplelayout"
    
    def _addableTypesInContext(self, addContext):
        addable_ftis = super()._addableTypesInContext(addContext)
        filtered = list(
            filter(
                lambda fti: IBlockMarker.__identifier__ not in fti.behaviors,
                addable_ftis
            )
        )
        return filtered


class SimplelayoutFactoriesMenu(FactoriesMenu):
    def getMenuItems(self, context, request):
        result = super().getMenuItems(context, request)

        def is_block_fti(menu_item):
            if '++add++' not in menu_item.get('action', ''):
                # Not a factory menu item
                return True

            ftis = api.portal.get_tool('portal_types')
            fti = ftis.get(menu_item['id'], None)

            if fti is None:
                return False

            return IBlockMarker.__identifier__ not in fti.behaviors

        filtered_result = filter(lambda menu_item: is_block_fti(menu_item), result)
        return filtered_result
