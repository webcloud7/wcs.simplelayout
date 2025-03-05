from plone import api
from plone.restapi.deserializer.dxfields import DefaultFieldDeserializer
from plone.restapi.interfaces import IFieldDeserializer
from plone.schema import IJSONField
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from zope.component import adapter
from zope.interface import implementer
from zope.interface import Interface


@adapter(IJSONField, ISimplelayout, Interface)
@implementer(IFieldDeserializer)
class LayoutFieldDeserializer(DefaultFieldDeserializer):

    def __call__(self, value):
        """
        Validate that the layout did no change.
        One exceptions is: if it is the first and only layout added.
        this happens upon creation of a page with the first block.

        Validate if block order changed. If the user cannot add blocks, he is
        also not able to move them around.
        """

        if self.field.__name__ == 'slblocks_layout':
            can_manage_cols = api.user.has_permission('wcs.simplelayout: Manage columns', obj=self.context)
            can_add_blocks = api.user.has_permission('wcs.simplelayout: Add Block', obj=self.context)
            if can_manage_cols and can_add_blocks:
                return super().__call__(value)

            if not can_manage_cols:
                self._ensure_cols_did_not_change(value)

            if not can_add_blocks:
                self._ensure_block_order_did_not_change(value)

        return super().__call__(value)

    def _ensure_cols_did_not_change(self, value):
        error = False
        current_value = self.field.get(self.context)
        if str(current_value['items']).count("'col'") != str(value['items']).count("'col'"):
            error = True
            if str(value['items']).count("'col'") == 1:
                error = False
        if error:
            raise ValueError('You cannot change the layout')

    def _ensure_block_order_did_not_change(self, value):
        current_value = self.field.get(self.context)
        if str(value) != str(current_value):
            raise ValueError('You cannot change the block order')
