from ftw.upgrade import UpgradeStep


class AddTableTinymceConfig(UpgradeStep):
    """Add table tinymce config.
    """

    def __call__(self):
        self.install_upgrade_profile()
