Introduction
============

This ist the reincardation of ftw.simplelayout on plone 6.
It's 100% focused on being a layout / page builder for a
editor/author site. It's not recommended to use is directly for anonymous users.
There will be no "nice" theme layer.
There will be no compremize regarding usability for content authors.


Installation
============

::

    $ make install
    $ make run


We support both option since the makefile approach does not support yet all the features
from the zope2instance recipe. For example control scripts are not yet supported
But it's faster and more convenient to setup a docker test image


Test
====


::

    $ make test


JavaScript
==========


This template should help get you started developing with Vue 3 in webpack 5.

Setup
-----

::sh

    npm install


Compile and Hot-Reload for Development
--------------------------------------

::sh

    npm run dev


Compile and Minify for Production
---------------------------------

::sh

    npm run build



Run E2E tests
-------------

::sh

    WSGI_SERVER_PORT=65035 ./bin/test-server wcs.simplelayout.testing.SIMPLELAYOUT_FRONTEND_TESTING

AND

::sh
    
    npm run test

OR

Use TestCafe Studio


