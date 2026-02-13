from plone.schema.jsonfield import IJSONField
from plone.schema.jsonfield import JSONField
from zope.interface import implementer
from zope.schema.interfaces import IFromUnicode


class ILayoutField(IJSONField):
    pass


@implementer(ILayoutField, IFromUnicode)
class LayoutField(JSONField):
    pass
