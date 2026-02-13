from unittest import TestCase
from wcs.simplelayout.contenttypes.behaviors import ISimplelayout
from wcs.simplelayout.fields.layout import ILayoutField
from wcs.simplelayout.fields.layout import LayoutField


class TestLayoutField(TestCase):

    def test_layout_field_provides_correct_interface(self):
        field = LayoutField()
        self.assertTrue(ILayoutField.providedBy(field))

    def test_layout_field_is_used_on_behavior(self):
        field = ISimplelayout['slblocks_layout']
        self.assertIsInstance(field, LayoutField)
