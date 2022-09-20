from ftw.upgrade import UpgradeStep


class AddRelatedContentBlock(UpgradeStep):
    """Add RelatedContentBlock.
    """

    def __call__(self):
        self.install_upgrade_profile()
