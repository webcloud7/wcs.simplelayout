from collective.ftw.upgrade import UpgradeStep


class UpdateTableblockFields(UpgradeStep):
    """Update tableblock fields.
    """

    def __call__(self):
        self.install_upgrade_profile()
