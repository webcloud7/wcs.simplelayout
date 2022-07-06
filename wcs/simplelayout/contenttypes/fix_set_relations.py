from wcs.simplelayout.contenttypes.utils import custom_extract_relations
from z3c.relationfield.event import _setRelation


def add_behavior_relations(obj, event):
    """Register relations in behaviors.
    This event handler fixes a bug in plone.app.relationfield, which only
    updates the zc.catalog when an object gets modified, but not when it gets
    added.
    """
    for behavior_interface, name, relation in custom_extract_relations(obj):
        _setRelation(obj, name, relation)
