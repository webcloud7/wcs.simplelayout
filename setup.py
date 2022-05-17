from setuptools import find_packages
from setuptools import setup
import os


long_description = '\n\n'.join([
    open('README.rst').read(),
    open(os.path.join("docs", "HISTORY.txt")).read(),
])

tests_require = [
    'plone.app.testing',
    'plone.app.dexterity',
    'plone.testing',
    'plone.api',
    'plone.app.contenttypes',
    'ftw.builder',
    'ftw.testbrowser',
    'zope.testrunner',
]

setup(
    name='wcs.simplelayout',
    version='1.0.0.dev0',
    description="Layout and Page builder for Plone",
    long_description=long_description,
    # Get more from https://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        "Environment :: Web Environment",
        "Framework :: Plone",
        "Framework :: Plone :: 6",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3.9",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: GNU General Public License v2 (GPLv2)",
    ],
    keywords='Plone Layout Page Builder',
    author='Mathias Leimgruber',
    author_email='m.leimgruber@webcloud7.ch',
    url='https://pypi.python.org/pypi/wcs.simplelayout',
    license='GPL version 2',
    packages=find_packages(exclude=['ez_setup']),
    namespace_packages=['wcs'],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'ftw.upgrade',
        'Plone',
        'plone.autoinclude',
        'plone.restapi',
        'setuptools',
    ],
    extras_require=dict(
        test=tests_require,
        tests=tests_require,
    ),
    entry_points="""
    [console_scripts]
    test-server = wcs.simplelayout.tests.server:server [test]
    [z3c.autoinclude.plugin]
    target = plone
    """,
)
