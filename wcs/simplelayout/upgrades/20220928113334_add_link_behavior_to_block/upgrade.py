from collective.ftw.upgrade import UpgradeStep


class AddLinkBehaviorToBlock(UpgradeStep):
    """Add Link behavior to Block.
    """

    def __call__(self):
        self.install_upgrade_profile()
