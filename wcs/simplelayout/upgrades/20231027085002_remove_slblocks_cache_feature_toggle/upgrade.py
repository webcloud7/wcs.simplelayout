from ftw.upgrade import UpgradeStep


class RemoveSlblocksCacheFeatureToggle(UpgradeStep):
    """remove slblocks cache feature toggle.
    """

    def __call__(self):
        self.install_upgrade_profile()
