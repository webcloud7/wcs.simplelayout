from ftw.upgrade import UpgradeStep


class AddCollapsableBehaviorToBlock(UpgradeStep):
    """Add collapsable behavior to Block.
    """

    def __call__(self):
        self.install_upgrade_profile()
