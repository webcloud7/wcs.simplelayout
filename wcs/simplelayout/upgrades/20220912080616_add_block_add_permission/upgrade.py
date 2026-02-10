from collective.ftw.upgrade import UpgradeStep


class AddBlockAddPermission(UpgradeStep):
    """Add block add permission.
    """

    def __call__(self):
        self.install_upgrade_profile()
