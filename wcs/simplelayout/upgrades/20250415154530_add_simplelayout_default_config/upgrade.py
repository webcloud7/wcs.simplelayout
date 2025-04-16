from ftw.upgrade import UpgradeStep


class AddSimplelayoutDefaultConfig(UpgradeStep):
    """Add simplelayout default config.
    """

    def __call__(self):
        self.install_upgrade_profile()
