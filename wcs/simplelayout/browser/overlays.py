from plone.app.content.browser.folderfactories import _allowedTypes
from Products.CMFCore.Expression import Expression
from Products.CMFCore.Expression import getExprContext
from Products.CMFPlone.interfaces.constrains import IConstrainTypes
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from wcs.simplelayout.utils import get_block_types
from zope.i18n import translate
from zope.publisher.browser import BrowserView


class AddableBlocks(BrowserView):
    template = ViewPageTemplateFile('templates/addable-blocks-overlay.pt')

    def __call__(self):
        return self.template()

    def addable_blocks(self):
        block_types = get_block_types()
        allowed_types = self._addable_types()

        for fti in block_types:
            if fti in allowed_types:
                add_url = Expression(fti.add_view_expr)(
                    getExprContext(self.context, self.context))
                add_url = add_url.replace('++add++', '++add_block++')
                yield {
                    'title': translate(msgid=fti.Title(),
                                       domain=fti.i18n_domain,
                                       context=self.request),
                    'description': translate(msgid=fti.Description(),
                                             domain=fti.i18n_domain,
                                             context=self.request),
                    'add_url': add_url,
                }

    def _addable_types(self):
        allowed_types = _allowedTypes(self.request, self.context)
        constrain = IConstrainTypes(self.context, None)
        if constrain is None:
            return allowed_types
        else:
            locally_allowed = constrain.getLocallyAllowedTypes()
            return [fti for fti in allowed_types
                    if fti.getId() in locally_allowed]
