from plone.restapi.batching import HypermediaBatch
from plone.restapi.interfaces import ISerializeToJson
from plone.restapi.interfaces import ISerializeToJsonSummary
from zope.component import adapter
from zope.component import getMultiAdapter
from wcs.simplelayout.interfaces import ISimplelayoutLayer
from zope.interface import implementer

import logging


try:
    from ZTUtils.Lazy import Lazy
except ImportError:
    from Products.ZCatalog.Lazy import Lazy


log = logging.getLogger(__name__)


@implementer(ISerializeToJson)
@adapter(Lazy, ISimplelayoutLayer)
class CustomLazyCatalogResultSerializer:
    """Catalog result set serializer that supports include_expansion.

    The upstream LazyCatalogResultSerializer does not forward
    include_expansion to per-item serializers. This override adds
    the kwarg so callers can opt out of expansion on nested items.

    Defaults to include_expansion=True to preserve existing behavior
    for external consumers (e.g. @search with fullobjects=1).
    Internal serializers (folder listings, block items) should pass
    include_expansion=False explicitly.
    """

    def __init__(self, lazy_resultset, request):
        self.lazy_resultset = lazy_resultset
        self.request = request

    def __call__(self, fullobjects=False, include_expansion=True):
        batch = HypermediaBatch(self.request, self.lazy_resultset)

        results = {}
        results["@id"] = batch.canonical_url
        results["items_total"] = batch.items_total
        links = batch.links
        if links:
            results["batching"] = links

        results["items"] = []
        for brain in batch:
            if fullobjects:
                try:
                    obj = brain.getObject()
                except KeyError:
                    log.warning(
                        "Brain getObject error: %s doesn't exist anymore",
                        brain.getPath(),
                    )
                    continue
                result = getMultiAdapter(
                    (obj, self.request), ISerializeToJson
                )(include_items=False, include_expansion=include_expansion)
            else:
                result = getMultiAdapter(
                    (brain, self.request), ISerializeToJsonSummary
                )()
            results["items"].append(result)

        return results
