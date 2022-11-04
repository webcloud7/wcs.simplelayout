from ftw.upgrade import UpgradeStep


class IntroduceDifferentSerializerForImagelistingAndFilelisting(UpgradeStep):
    """Introduce different serializer for imagelisting and filelisting.
    """

    def __call__(self):
        self.install_upgrade_profile()
