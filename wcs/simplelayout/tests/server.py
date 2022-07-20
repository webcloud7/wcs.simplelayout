import argparse
import logging
import os
import sys
import time
import signal


HAS_DEBUG_MODE = False
HAS_VERBOSE_CONSOLE = True
ZSERVER_HOST = os.getenv("ZSERVER_HOST", "localhost")


def TIME():
    return time.strftime("%H:%M:%S")


def WAIT(msg):
    return f"{TIME()} [\033[33m wait \033[0m] {msg}"


def ERROR(msg):
    return f"{TIME()} [\033[31m ERROR \033[0m] {msg}"


def READY(msg):
    return f"{TIME()} [\033[32m ready \033[0m] {msg}"


def start(zope_layer_dotted_name):

    print(WAIT("Starting Zope test server"))

    zsl = Zope2Server()
    zsl.start_zope_server(zope_layer_dotted_name)

    print(READY("Started Zope robot server"))

    def wrapper_sigusr1(*args, **kwargs):
        Zope2Server().zodb_setup(zope_layer_dotted_name)
    signal.signal(signal.SIGUSR1, wrapper_sigusr1)

    def wrapper_sigusr2(*args, **kwargs):
        Zope2Server().zodb_teardown(zope_layer_dotted_name)
    signal.signal(signal.SIGUSR2, wrapper_sigusr2)

    print_urls(zsl.zope_layer)

    return zsl


def print_urls(zope_layer):
    """Prints the urls with the chosen ports.
    When using a port 0, the operating system chooses an open port.
    When doing that it is helpful that the URLs with the chosen ports are printed to stdout.
    """

    for layer in zope_layer.baseResolutionOrder:
        # Walk up the testing layers and look for the first zserver in order to get the
        # actual server name and server port.
        wsgi_server = getattr(layer, "server", None)
        if not wsgi_server:
            continue
        print(f"WSGI SERVER: http://{wsgi_server.effective_host}:{wsgi_server.effective_port}")
        print(f"WSGI SERVER: PID '{os.getpid()}'")
        break


def server():
    parser = argparse.ArgumentParser()
    parser.add_argument("layer")
    parser.add_argument("--debug-mode", "-d", dest="debug_mode", action="store_true")
    VERBOSE_HELP = (
        "-v information about test layers setup and tear down, "
        "-vv add logging.WARNING messages, "
        "-vvv add INFO messages, -vvvv add DEBUG messages."
    )
    parser.add_argument("--verbose", "-v", action="count", help=VERBOSE_HELP)
    args = parser.parse_args()

    # Set debug mode
    if args.debug_mode is True:
        global HAS_DEBUG_MODE
        HAS_DEBUG_MODE = True

    # Set console log level
    if args.verbose:
        global HAS_VERBOSE_CONSOLE
        HAS_VERBOSE_CONSOLE = True
        loglevel = logging.ERROR - (args.verbose - 1) * 10
    else:
        loglevel = logging.ERROR
    logging.basicConfig(level=loglevel)

    try:
        zsl = start(args.layer)
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print(WAIT("Stopping Zope robot server"))

        zsl.stop_zope_server()

        print(READY("Zope robot server stopped"))


class Zope2Server:

    stop_zope_server_lazy = False  # trigger lazy Zope2Server shutdown
    stop_zope_server_layer = None  # sticky layer for lazy shutdown

    def __init__(self):
        self.zope_layer = self.stop_zope_server_layer
        self.extra_layers = {}

    def _import_layer(self, layer_dotted_name):
        parts = layer_dotted_name.split(".")
        if len(parts) < 2:
            raise ValueError("no dot in layer dotted name")
        module_name = ".".join(parts[:-1])
        layer_name = parts[-1]
        __import__(module_name)
        module = sys.modules[module_name]
        layer = getattr(module, layer_name)
        return layer

    def start_zope_server(self, layer_dotted_name):
        new_layer = self._import_layer(layer_dotted_name)
        if self.zope_layer and self.zope_layer is not new_layer:
            self.stop_zope_server(force=True)
        elif self.zope_layer and self.zope_layer.get("dirty", False):
            self.stop_zope_server(force=True)
        setup_layer(new_layer)
        self.zope_layer = new_layer

    def set_zope_layer(self, layer_dotted_name):
        """Explicitly set the current Zope layer, when you know what you are
        doing
        """
        new_layer = self._import_layer(layer_dotted_name)
        self.zope_layer = new_layer

    def amend_zope_server(self, layer_dotted_name):
        """Set up extra layers up to given layer_dotted_name"""
        old_layers = setup_layers.copy()
        new_layer = self._import_layer(layer_dotted_name)
        setup_layer(new_layer)
        for key in setup_layers.keys():
            if key not in old_layers:
                self.extra_layers[key] = 1
        self.zope_layer = new_layer

    def prune_zope_server(self):
        """Tear down the last set of layers set up with amend_zope_server"""
        tear_down(self.extra_layers)
        self.extra_layers = {}
        self.zope_layer = None

    def stop_zope_server(self, force=False):
        if not self.stop_zope_server_lazy or force:
            tear_down()
        else:
            # With lazy stop, the layer is saved to enable Zope2Server re-use
            # within the same process, until tear_down is called explicitly.
            Zope2Server.stop_zope_server_layer = self.zope_layer
        self.zope_layer = None

    def zodb_setup(self, layer_dotted_name=None):
        if layer_dotted_name:
            self.set_zope_layer(layer_dotted_name)

        from zope.testrunner.runner import order_by_bases

        layers = order_by_bases([self.zope_layer])
        for layer in layers:
            if hasattr(layer, "testSetUp"):
                if HAS_VERBOSE_CONSOLE:
                    print(
                        WAIT(
                            "Test set up {}.{}".format(layer.__module__, layer.__name__)
                        )
                    )
                layer.testSetUp()
        if HAS_VERBOSE_CONSOLE:
            print(READY("Test set up"))

    def zodb_teardown(self, layer_dotted_name=None):
        if layer_dotted_name:
            self.set_zope_layer(layer_dotted_name)

        from zope.testrunner.runner import order_by_bases

        layers = order_by_bases([self.zope_layer])
        layers.reverse()
        for layer in layers:
            if hasattr(layer, "testTearDown"):
                if HAS_VERBOSE_CONSOLE:
                    print(
                        WAIT(
                            "Test tear down {}.{}".format(
                                layer.__module__, layer.__name__
                            )
                        )
                    )
                layer.testTearDown()
        if HAS_VERBOSE_CONSOLE:
            print(READY("Test torn down"))


setup_layers = {}


def setup_layer(layer, setup_layers=setup_layers):
    assert layer is not object
    if layer not in setup_layers:
        for base in layer.__bases__:
            if base is not object:
                setup_layer(base, setup_layers)
        if hasattr(layer, "setUp"):
            name = f"{layer.__module__}.{layer.__name__}"
            if HAS_VERBOSE_CONSOLE and name == "plone.testing.z2.Startup":
                print(
                    WAIT(
                        "Set up {}.{} (debug-mode={})".format(
                            layer.__module__, layer.__name__, HAS_DEBUG_MODE
                        )
                    )
                )
            elif HAS_VERBOSE_CONSOLE:
                print(WAIT(f"Set up {layer.__module__}.{layer.__name__}"))
            layer.setUp()
            if HAS_DEBUG_MODE and name == "plone.testing.z2.Startup":
                import App.config

                config = App.config.getConfiguration()
                config.debug_mode = HAS_DEBUG_MODE
                App.config.setConfiguration(config)
        setup_layers[layer] = 1


def tear_down(setup_layers=setup_layers):
    from zope.testrunner.runner import order_by_bases

    # Tear down any layers not needed for these tests. The unneeded layers
    # might interfere.
    unneeded = [layer for layer in setup_layers]
    unneeded = order_by_bases(unneeded)
    unneeded.reverse()
    for layer in unneeded:
        try:
            try:
                if hasattr(layer, "tearDown"):
                    if HAS_VERBOSE_CONSOLE:
                        print(WAIT(f"Tear down {layer.__module__}.{layer.__name__}"))
                    layer.tearDown()
            except NotImplementedError:
                pass
        finally:
            del setup_layers[layer]
