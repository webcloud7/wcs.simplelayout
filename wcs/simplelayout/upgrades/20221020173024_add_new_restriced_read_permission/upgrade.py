from collective.ftw.upgrade import UpgradeStep


class AddNewRestricedReadPermission(UpgradeStep):
    """Add new restriced read permission.
    """

    def __call__(self):
        self.install_upgrade_profile()
