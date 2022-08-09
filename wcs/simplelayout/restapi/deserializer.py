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
        """

        if self.field.__name__ == 'slblocks_layout':
            if api.user.has_permission('wcs.simplelayout: Manage columns', obj=self.context):
                return super().__call__(value)                

            error = False
            current_value = self.field.get(self.context)
            if len(current_value['items']) != len(value['items']):
                error = True
                if value['items'] == 1:
                    error = False
            if str(current_value['items']).count('col') != str(value['items']).count('col'):
                error = True
                if str(value['items']).count('col') == 1:
                    error = False

            if error:
                raise ValueError('You cannot change the layout')

        return super().__call__(value)
