from collective.ftw.upgrade import UpgradeStep


class ReconfigureNewsfolder(UpgradeStep):
    """reconfigure newsfolder.
    """

    def __call__(self):
        self.install_upgrade_profile()
