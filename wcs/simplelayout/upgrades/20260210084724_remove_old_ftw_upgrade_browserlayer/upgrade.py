from collective.ftw.upgrade import UpgradeStep


class RemoveOldFtwUpgradeBrowserlayer(UpgradeStep):
    """Remove old ftw.upgrade browserlayer.
    """

    def __call__(self):
        self.install_upgrade_profile()
        self.remove_broken_browserlayer('ftw.upgrade', 'ftw.upgrade.interfaces.IUpgradeLayer')
