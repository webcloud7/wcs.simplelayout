from copy import deepcopy
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from plone.dexterity.interfaces import IDexterityFTI
from unittest import TestCase
from wcs.simplelayout.testing import SIMPLELAYOUT_FUNCTIONAL_TESTING
from zope.component import queryUtility
import transaction
import wcs.simplelayout.tests.builders  # noqa


class FunctionalTesting(TestCase):
    layer = SIMPLELAYOUT_FUNCTIONAL_TESTING

    @property
    def api_headers(self):
        return deepcopy({
            'Accept': 'application/json',
        })

    def setUp(self):
        self.portal = self.layer['portal']
        self.request = self.layer['request']

    def grant(self, *roles):
        setRoles(self.portal, TEST_USER_ID, list(roles))
        transaction.commit()

    def add_behavior(self, portal_type, behavior):
        fti = queryUtility(IDexterityFTI, name=portal_type)
        if fti is not None:
            # This prevents to add the behavior twice
            new = [
                currentbehavior
                for currentbehavior in fti.behaviors
                if currentbehavior != behavior
            ]
            new.append(behavior)
            fti.behaviors = tuple(new)
