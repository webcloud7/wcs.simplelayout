from ftw.upgrade import UpgradeStep


class AddTeaserBlock(UpgradeStep):
    """Add TeaserBlock.
    """

    def __call__(self):
        self.install_upgrade_profile()
