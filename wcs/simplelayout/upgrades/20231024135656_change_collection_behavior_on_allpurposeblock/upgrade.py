from collective.ftw.upgrade import UpgradeStep


class ChangeCollectionBehaviorOnAllpurposeblock(UpgradeStep):
    """Change collection behavior on allpurposeblock.
    """

    def __call__(self):
        self.install_upgrade_profile()
