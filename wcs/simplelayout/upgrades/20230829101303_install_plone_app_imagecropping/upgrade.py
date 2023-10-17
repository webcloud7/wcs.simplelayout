from ftw.upgrade import UpgradeStep


class InstallPloneAppImagecropping(UpgradeStep):
    """Install plone.app.imagecropping.
    """

    def __call__(self):
        self.install_upgrade_profile()
        self.setup_install_profile('profile-plone.app.imagecropping:default')
