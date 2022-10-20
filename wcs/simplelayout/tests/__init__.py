from copy import deepcopy
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from unittest import TestCase
from wcs.simplelayout.testing import SIMPLELAYOUT_FUNCTIONAL_TESTING
import transaction
import wcs.simplelayout.tests.builders  # noqa


class FunctionalTesting(TestCase):
    layer = SIMPLELAYOUT_FUNCTIONAL_TESTING

    @property
    def api_headers(self):
        return deepcopy({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        })

    def setUp(self):
        self.portal = self.layer['portal']
        self.request = self.layer['request']

    def grant(self, *roles):
        setRoles(self.portal, TEST_USER_ID, list(roles))
        transaction.commit()
