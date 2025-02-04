import { Selector, ClientFunction } from 'testcafe';

fixture `test_simplelayout`
    .page `./`
    .beforeEach(async t => {
        const { setup } = require('./fixture-helper.js');
        await setup.call();

        await t
            .navigateTo('/plone/login')
            .typeText('#__ac_name', 'admin')
            .pressKey('tab')
            .typeText('#__ac_password', 'secret')
            .click('[name="buttons.login"]')
            .resizeWindow(1800, 1500);
    })
    .afterEach(async t => {
        const { teardown } = require('./fixture-helper.js');
        await teardown.call();
    });

test('Add, edit, delete Block', async t => {
    await t
        .click(Selector('#plone-contentmenu-factories span').withText('Add new…'))
        .click('#contentpage')
        .typeText('#form-widgets-IBasic-title', 'New Page')
        .click(Selector('main button').withText('Save'))
        .expect(Selector('main div.simplelayout-app').exists).ok()
        .hover('#app .card-header')
        .click(Selector('main button').withText('Add'))
        .click(Selector('main a').withText('Block'))
        .switchToIframe('main .tox-edit-area__iframe')
        .click('html')
        .switchToMainWindow()
        .typeText('#form-widgets-IBlockTitle-title', 'A title')
        .click(Selector('main a').withText('Image'))
        .click('#form-widgets-IBlockImage-image-input')
        .setFilesToUpload('#form-widgets-IBlockImage-image-input', ['../../../_uploads_/winter_fantasy-1920x1080.jpg'])
        .typeText('#form-widgets-IBlockImage-image_alt_text', 'Alt text')
        .typeText('#form-widgets-IBlockImage-image_caption', 'caption')
        .click(Selector('main a').withText('Default'))
        .switchToIframe('main .tox-edit-area__iframe')
        .typeText('body', 'The Text')
        .switchToMainWindow()
        .click(Selector('main a').withText('Default'))
        .click(Selector('main button').withText('Save'))
        .expect(Selector('.simplelayout-app .sl-block')()).ok()
        .expect(Selector('.card-title div').withText('A title').textContent).ok()
        .expect(Selector('.sl-card-text p').textContent).eql("The Text")
        .expect(Selector('.figure-img').exists).eql(true)
        .expect(Selector('.figure-img').getAttribute('alt')).eql("Alt text")
        .expect(Selector('main .figure-caption').textContent).eql("caption")
        .hover('#app .card-header')
        .click(Selector('main span').withText('Actions'))
        .click(Selector('main a').withText('Edit'))
        .selectText('#form-widgets-IBlockTitle-title', 0, 7)
        .pressKey('delete')
        .typeText('#form-widgets-IBlockTitle-title', 'New title', {
            caretPos: 0
        })
        .switchToIframe('main .tox-edit-area__iframe')
        .click(Selector('p').withText('The Text'))
        .pressKey('meta+a')
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText('body', 'New Text', {
            caretPos: 0
        })
        .switchToMainWindow()
        .click(Selector('main a').withText('Image'))
        .click(Selector('main label').withText('Remove existing image'))
        .click(Selector('main a').withText('Link'))
        .typeText('#form-widgets-ILink-external_link', 'https://webcloud7.ch')
        .click(Selector('main a').withText('Default'))
        .click(Selector('main button').withText('Save').nth(1))
        .expect(Selector('.card-title').tagName).eql("a")
        .expect(Selector('.card-title').getAttribute('href')).eql("https://webcloud7.ch")
        .expect(Selector('.sl-card-text').textContent).eql("New Text")
        .expect(Selector('.figure-img').exists).notOk()
        .hover('#app .card-header')
        .click(Selector('main span').withText('Actions'))
        .click(Selector('main a').withText('Delete'))
        .click(Selector('main button').withText('Delete'))
        .expect(Selector('.sl-block-placeholder').exists).ok()
        .hover('#app .card-header')
        .expect(Selector('.sl-block button').withText('Add').exists).eql(true);
});

test('Grid', async t => {
    await t
        .click(Selector('#plone-contentmenu-factories span').withText('Add new…'))
        .click('#contentpage')
        .pressKey('left')
        .typeText('#form-widgets-IBasic-title', 'test page')
        .click(Selector('main button').withText('Save'))
        .expect(Selector('.sl-row').count).eql(1)
        .click(Selector('main button').withText('+').nth(3))
        .expect(Selector('.sl-row').count).eql(2)
        .click(Selector('main button').withText('+'))
        .expect(Selector('.sl-row').count).eql(3)
        .hover(Selector('.sl-row').nth(2))
        .click(Selector('main button').withText('Remove').nth(2))
        .expect(Selector('.sl-row').count).eql(2)
        .hover(Selector('.sl-row').nth(1))
        .click(Selector('main button').withText('+').nth(5))
        .expect(Selector('.sl-col.col-6').count).eql(2)
        .hover(Selector('.sl-row').nth(1))
        .click(Selector('main button').withText('+').nth(6))
        .expect(Selector('.sl-col.col-4').count).eql(3)
        .hover(Selector('.sl-row').nth(1))
        .click(Selector('main button').withText('+').nth(7))
        .expect(Selector('.sl-col.col-3').count).eql(4)
        .click(Selector('main button').withText('+').nth(8))
        .click(Selector('main button').withText('+').nth(9))
        .expect(Selector('.sl-col.col-2').count).eql(6)
        .hover(Selector('.sl-row').nth(0))
        .click(Selector('main button').withText('+').nth(2))
        .click(Selector('main button').withText('Width: 50%').nth(1))
        .click(Selector('main a').withText('25%').nth(2))
        .click(Selector('main button').withText('Width: 50%'))
        .click(Selector('main a').withText('75%'))
        .expect(Selector('.sl-col.col-9').count).eql(1)
        .expect(Selector('.sl-col.col-3').count).eql(1);
});

test('Listings (File, Image)', async t => {
    await t
        .click(Selector('#plone-contentmenu-factories span').withText('Add new…'))
        .click('#contentpage')
        .typeText('#form-widgets-IBasic-title', 'a page')
        .click(Selector('main button').withText('Save'))
        .hover('#app .card-header')
        .click(Selector('main button').withText('Add'))
        .click(Selector('main a').withText('FileListingBlock'))
        .typeText('#form-widgets-IBlockTitle-title', 'File listing')
        .click(Selector('main button').withText('Save'))
        .setNativeDialogHandler(() => {})
        .click(Selector('main button').withText('Click here to create a new Media Folder'))
        .click(Selector('main a').withText('Upload'))
        .click(Selector('main button').withText('Browse'))
        .setFilesToUpload('.dz-hidden-input', ['../../../_uploads_/test.doc', '../../../_uploads_/test.docx', '../../../_uploads_/test.xlsx', '../../../_uploads_/test.pdf', '../../../_uploads_/a1.pdf'])
        .click(Selector('main button').withText('Upload'))
        .wait(2)
        .expect(Selector('.upload-container .previews .row').count).eql(0)
        .click(Selector('main a').withText('File listing'))
        .expect(Selector('.sl-block table tbody tr').count).eql(5)
        .click(Selector('main a').withText('Go the the referenced Media Folder'))
        .click(Selector('main a').withText('Upload'))
        .click(Selector('main button').withText('Browse'))
        .setFilesToUpload('.dz-hidden-input', ['../../../_uploads_/island_coastal_cliff-1920x1080.jpg', '../../../_uploads_/valley_house-1920x1080.jpg', '../../../_uploads_/mirror_lakes_sunlight-1920x1080.jpg', '../../../_uploads_/norway_plants-1920x1080.jpg', '../../../_uploads_/fiordland_mountain_sunrise-1920x1080.jpg', '../../../_uploads_/winter_fantasy-1920x1080 1.jpg', '../../../_uploads_/fog_over_mountains-1920x1080.jpg', '../../../_uploads_/hot_spring_pool-1920x1080.jpg', '../../../_uploads_/golf_course-1920x1080.jpg', '../../../_uploads_/dee_why_beach_sunrise-1920x1080.jpg', '../../../_uploads_/trees_cloud_fog_landscape-1920x1080.jpg', '../../../_uploads_/kaibab_lake_arizona-1920x1080.jpg', '../../../_uploads_/northern_lights-1920x1080.jpg', '../../../_uploads_/a1.jpg'])
        .click(Selector('main button').withText('Upload'))
        .wait(4)
        .expect(Selector('.upload-container .previews .row').count).eql(0)
        .click(Selector('main a').withText('File listing'))
        .expect(Selector('.sl-block table tbody tr').count).eql(10)
        .click(Selector('main a').withText('Next'))
        .expect(Selector('.sl-block table tbody tr').count).eql(9)
        .hover('#app .card-header')
        .click(Selector('main button').withText('Actions'))
        .click(Selector('main a').withText('Add'))
        .click(Selector('main a').withText('ImageListingBlock'))
        .typeText('#form-widgets-IBlockTitle-title', 'images')
        .click(Selector('main button').withText('Save'))
        .click(Selector('main button').withText('Click here to create a new Media Folder'))
        .click(Selector('main a').withText('Upload'))
        .click(Selector('main button').withText('Browse'))
        .setFilesToUpload('.dz-hidden-input', ['../../../_uploads_/island_coastal_cliff-1920x1080 1.jpg', '../../../_uploads_/valley_house-1920x1080 1.jpg', '../../../_uploads_/mirror_lakes_sunlight-1920x1080 1.jpg', '../../../_uploads_/norway_plants-1920x1080 1.jpg', '../../../_uploads_/fiordland_mountain_sunrise-1920x1080 1.jpg', '../../../_uploads_/winter_fantasy-1920x1080 2.jpg', '../../../_uploads_/fog_over_mountains-1920x1080 1.jpg', '../../../_uploads_/hot_spring_pool-1920x1080 1.jpg', '../../../_uploads_/golf_course-1920x1080 1.jpg', '../../../_uploads_/dee_why_beach_sunrise-1920x1080 1.jpg', '../../../_uploads_/trees_cloud_fog_landscape-1920x1080 1.jpg', '../../../_uploads_/kaibab_lake_arizona-1920x1080 1.jpg', '../../../_uploads_/northern_lights-1920x1080 1.jpg', '../../../_uploads_/a2.jpg'])
        .click(Selector('main button').withText('Upload'))
        .wait(2)
        .expect(Selector('.upload-container .previews .row').count).eql(0)
        .click(Selector('main a').withText('images'))
        .expect(Selector('.sl-block .sl-image-listing').count).eql(3)
        .expect(Selector('.sl-block .sl-image-listing').nth(0).textContent).eql("a2.jpg")
        .click(Selector('main a').withText('Next').nth(1))
        .expect(Selector('.sl-block .sl-image-listing').nth(0).textContent).eql("fog_over_mountains-1920x1080 1.jpg")
        .expect(Selector('.sl-block .sl-image-listing').count).eql(3)
        .click(Selector('main a').withText('Next').nth(1))
        .click(Selector('main a').withText('Next').nth(1))
        .click(Selector('main a').withText('Next').nth(1))
        .expect(Selector('.sl-block .sl-image-listing').count).eql(2);
});

test('News', async t => {
    await t
        .click(Selector('#plone-contentmenu-factories span').withText('Add new…'))
        .click('#contentpage')
        .click('#form-widgets-IBasic-title', {
            caretPos: 0
        })
        .typeText('#form-widgets-IBasic-title', 'page')
        .click(Selector('main button').withText('Save'))
        .click(Selector('#plone-contentmenu-factories span').withText('Add new…'))
        .click('#newsfolder')
        .click('#form-widgets-IBasic-title', {
            caretPos: 0
        })
        .typeText('#form-widgets-IBasic-title', 'news folder')
        .click(Selector('main button').withText('Save'))
        .click(Selector('#plone-contentmenu-factories span').withText('Add new…'))
        .click('#news')
        .typeText('#form-widgets-IBasic-title', 'news1')
        .click(Selector('main button').withText('Save'))
        .click(Selector('#portal-breadcrumbs a').withText('page'))
        .hover('#app .card-header')
        .click(Selector('main button').withText('Add'))
        .click(Selector('main a').withText('NewsListingBlock'))
        .typeText('#form-widgets-IBlockTitle-title', 'listing')
        .click(Selector('main button').withText('Save'))
        .expect(Selector('.sl-block table tbody tr').count).eql(1)
        .expect(Selector('table a').withText('news1').count).eql(1)
        .setNativeDialogHandler(() => {})
        .navigateTo('/plone/page/news-folder')
        .click(Selector('#plone-contentmenu-factories span').withText('Add new…'))
        .click('#news')
        .typeText('#form-widgets-IBasic-title', 'older news')
        .typeText('[name="form.widgets.INews.news_date"]', '2020-01-01T01:00')
        .click(Selector('main button').withText('Save'))
        .click(Selector('#portal-breadcrumbs a').withText('news folder'))
        .expect(Selector('#content-core .h2').nth(1).textContent).eql("older news")
        .click('#portal-breadcrumbs .breadcrumb');
});

test('Collapsable', async t => {
    await t
        .click(Selector('#plone-contentmenu-factories span').withText('Add new…'))
        .click('#contentpage')
        .typeText('#form-widgets-IBasic-title', 'test page')
        .click(Selector('main button').withText('Save'))
        .hover('#app .card-header')
        .click(Selector('main button').withText('Add'))
        .click(Selector('main a').withText('Block'))
        .switchToIframe('main .tox-edit-area__iframe')
        .click('html')
        .switchToMainWindow()
        .typeText('#form-widgets-IBlockTitle-title', 'Title')
        .switchToIframe('main .tox-edit-area__iframe')
        .typeText('body', 'TExt')
        .switchToMainWindow()
        .click(Selector('main button').withText('Save'))
        .hover('#app .card-header')
        .click(Selector('main button').withText('Actions'))
        .click(Selector('main a').withText('Edit'))
        .click('#form-widgets-ICollapsableBlock-collapsable-0')
        .click(Selector('main button').withText('Save').nth(1))
        .expect(Selector('.card-body').visible).eql(false)
        .expect(Selector('.sl-collapsable-button').count).eql(1)
        .expect(Selector('.sl-collapsable-button').innerText).eql(">")
        .click(Selector('main button').withText('>'))
        .expect(Selector('.sl-collapsable-button').innerText).eql("v")
        .expect(Selector('.card-body').visible).eql(true);
});

test('CustomTemplate', async t => {
    await t
        .click(Selector('#plone-contentmenu-factories span').withText('Add new…'))
        .click('#contentpage')
        .typeText('#form-widgets-IBasic-title', 'A page')
        .click(Selector('main button').withText('Save'))
        .hover('#app .card-header')
        .click(Selector('main button').withText('Add'))
        .click(Selector('main a').withText('Block'))
        .switchToIframe('main .tox-edit-area__iframe')
        .click('html')
        .switchToMainWindow()
        .typeText('#form-widgets-IBlockTitle-title', 'A Block')
        .switchToIframe('main .tox-edit-area__iframe')
        .typeText('body', 'Text')
        .switchToMainWindow()
        .click(Selector('main button').withText('Save'))
        .setNativeDialogHandler(() => {})
        .hover('#app .card-header')
        .click(Selector('main button').withText('Actions'))
        .click(Selector('main a').withText('Contents (Listing)'))
        .navigateTo('/plone/a-page/a-block/++add++Image')
        .click(Selector('main .form-control').nth(2))
        .setFilesToUpload(Selector('main .form-control').nth(2), ['../../../_uploads_/valley_house-1920x1080 2.jpg'])
        .click(Selector('main button').withText('Save'))
        .navigateTo('/plone/@@dexterity-types/Block')
        .click(Selector('header').nth(1).find('a').withText('Block Template'))
        .typeText('main [name="form.widgets.template"]', '<div id=\'anyID\'>{{ block[\'title\'] }}</div> <div id=\'anyID2\'>There is {{ getContents().length }} items in this block</div>')
        .click(Selector('main button').withText('Save'))
        .click(Selector('#portal-globalnav a').withText('A page'))
        .expect(Selector('#anyID').textContent).eql("A Block")
        .expect(Selector('#anyID2').textContent).eql("There is 1 items in this block");
});

test('Rowconfiguration', async t => {
    await t
        .click(Selector('#plone-contentmenu-factories span').withText('Add new…'))
        .click('#contentpage')
        .typeText('#form-widgets-IBasic-title', 'A page')
        .click(Selector('main button').withText('Save'))
        .expect(Selector('.sl-add-row-controls button').count).eql(4)
        .click('#personaltools-menulink')
        .click('#personaltools-plone_setup')
        .click('main .plone-icon.overview-icon.bi.bi-gem')
        .click(Selector('main span').withText('ContentPage'))
        .click(Selector('header').nth(1).find('a').withText('Row Configuration'));

    const change = ClientFunction(()=> {
        document.querySelector('.pat-code-editor').setAttribute('style', 'display:block !important') 
    })
    await change();

    await t
        .click('.pat-code-editor', {
            caretPos: 99
        })
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('.pat-code-editor', '<?xml version=\'1.0\' encoding=\'utf8\'?> <model xmlns="http://namespaces.plone.org/supermodel/schema"> <schema>     <field name="show_in_right_column" type="zope.schema.Bool">       <description/>       <required>False</required>       <title>In rechter Spalte anzeigen</title>     </field> </schema> </model>')
        .click(Selector('main button').withText('Apply'))
        .click(Selector('#portal-globalnav a').withText('A page'))
        .expect(Selector('.btn.btn-warning img').getAttribute('alt')).eql("Edit row")
        .click('main [alt="Edit row"]')
        .click('main [name="form.widgets.show_in_right_column:list"]')
        .click(Selector('main button').withText('Save'))
        .click('main [alt="Edit row"]')
        .expect(Selector('main [name="form.widgets.show_in_right_column:list"]').checked).eql(true);
});