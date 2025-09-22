from ftw.upgrade import UpgradeStep


class AddEventsfolderAndEventpage(UpgradeStep):
    """Add eventsfolder and eventpage.
    """

    def __call__(self):
        self.install_upgrade_profile()
