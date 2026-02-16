import path from 'path';
import { test, expect } from './fixtures';
import { createContentPage, UPLOADS_DIR } from './helpers';

test.describe('Simplelayout Block CRUD', () => {
  test('Add, edit and delete a block', async ({ authenticatedPage: page }) => {
    await createContentPage(page, 'New Page');

    await expect(page.locator('main div.simplelayout-app')).toBeVisible();

    // Add a block
    await page.hover('#app .card-header');
    await page.click('main button:has-text("Add")');
    await page.click('main a:has-text("Block")');

    const iframe = page.frameLocator('main .tox-edit-area__iframe');
    await iframe.locator('html').click();

    await page.fill('#form-widgets-IBlockTitle-title', 'A title');

    // Upload image
    await page.click('main a:has-text("Image")');
    await page.click('#form-widgets-IBlockImage-image-input');
    await page.setInputFiles('#form-widgets-IBlockImage-image-input',
      path.join(UPLOADS_DIR, 'winter_fantasy-1920x1080.jpg'));
    await page.fill('#form-widgets-IBlockImage-image_alt_text', 'Alt text');
    await page.fill('#form-widgets-IBlockImage-image_caption', 'caption');

    // Type text in TinyMCE
    await page.click('main a:has-text("Default")');
    await iframe.locator('body').fill('The Text');

    // Save block
    await page.click('main a:has-text("Default")');
    await page.click('main button:has-text("Save")');

    // Verify block rendering
    await expect(page.locator('.simplelayout-app .sl-block')).toBeVisible();
    await expect(page.locator('.card-title div:has-text("A title")')).toBeVisible();
    await expect(page.locator('.sl-card-text p')).toHaveText('The Text');
    await expect(page.locator('.figure-img').first()).toBeVisible();
    await expect(page.locator('.figure-img').first()).toHaveAttribute('alt', 'Alt text');
    await expect(page.locator('main .figure-caption').first()).toHaveText('caption');

    // Edit block
    await page.hover('#app .card-header');
    await page.click('main span:has-text("Actions")');
    await page.click('main a:has-text("Edit")');

    await page.locator('#form-widgets-IBlockTitle-title').selectText();
    await page.keyboard.press('Delete');
    await page.fill('#form-widgets-IBlockTitle-title', 'New title');

    // Replace text in TinyMCE
    const editIframe = page.frameLocator('main .tox-edit-area__iframe');
    await editIframe.locator('p:has-text("The Text")').click();
    await page.keyboard.press('Meta+a');
    await page.keyboard.press('Control+a');
    await page.keyboard.press('Delete');
    await editIframe.locator('body').fill('New Text');

    // Remove image, add link
    await page.click('main a:has-text("Image")');
    await page.click('main label:has-text("Remove existing image")');
    await page.click('main a:has-text("Link")');
    await page.fill('#form-widgets-ILink-external_link', 'https://webcloud7.ch');

    // Save
    await page.click('main a:has-text("Default")');
    await page.locator('main button:has-text("Save")').nth(1).click();

    // Verify edit results
    await expect(page.locator('.card-title')).toHaveAttribute('href', 'https://webcloud7.ch');
    await expect(page.locator('.card-title').first()).toHaveJSProperty('tagName', 'A');
    await expect(page.locator('.sl-card-text')).toHaveText('New Text');
    await expect(page.locator('.figure-img')).not.toBeVisible();

    // Delete block
    await page.hover('#app .card-header');
    await page.click('main span:has-text("Actions")');
    await page.click('main a:has-text("Delete")');
    await page.click('main button:has-text("Delete")');

    await expect(page.locator('.sl-block-placeholder')).toBeVisible();
    await page.hover('#app .card-header');
    await expect(page.locator('.sl-block button:has-text("Add")')).toBeVisible();
  });
});
