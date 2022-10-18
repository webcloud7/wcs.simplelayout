from ftw.upgrade import UpgradeStep


class AddIframeBlock(UpgradeStep):
    """Add iframeBlock.
    """

    def __call__(self):
        self.install_upgrade_profile()
