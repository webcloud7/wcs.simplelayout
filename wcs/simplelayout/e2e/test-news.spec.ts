import { test, expect } from './fixtures';
import { createContentPage } from './helpers';

test.describe('Simplelayout News', () => {
  test('News listing block with ordering', async ({ authenticatedPage: page }) => {
    await createContentPage(page, 'page');

    // Create NewsFolder
    await page.click('#plone-contentmenu-factories span:has-text("Add new")');
    await page.click('#newsfolder');
    await page.fill('#form-widgets-IBasic-title', 'news folder');
    await page.click('main button:has-text("Save")');

    // Create News item
    await page.click('#plone-contentmenu-factories span:has-text("Add new")');
    await page.click('#news');
    await page.fill('#form-widgets-IBasic-title', 'news1');
    await page.click('main button:has-text("Save")');

    // Navigate back and add NewsListingBlock
    await page.click('#portal-breadcrumbs a:has-text("page")');
    await page.hover('#app .card-header');
    await page.click('main button:has-text("Add")');
    await page.click('main a:has-text("NewsListingBlock")');
    await page.fill('#form-widgets-IBlockTitle-title', 'listing');
    await page.click('main button:has-text("Save")');

    // Verify news item appears
    await expect(page.locator('.sl-block table tbody tr')).toHaveCount(1);
    await expect(page.locator('table a:has-text("news1")')).toHaveCount(1);

    // Navigate to news folder and create older news
    page.on('dialog', dialog => dialog.dismiss());
    await page.goto('/plone/page/news-folder');

    await page.click('#plone-contentmenu-factories span:has-text("Add new")');
    await page.click('#news');
    await page.fill('#form-widgets-IBasic-title', 'older news');
    await page.fill('[name="form.widgets.INews.news_date"]', '2020-01-01T01:00');
    await page.click('main button:has-text("Save")');

    // Verify ordering in news folder
    await page.click('#portal-breadcrumbs a:has-text("news folder")');
    await expect(page.locator('#content-core .h2').nth(1)).toHaveText('older news');
    await page.click('#portal-breadcrumbs .breadcrumb');
  });
});
