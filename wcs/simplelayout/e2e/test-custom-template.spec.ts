import path from 'path';
import { test, expect } from './fixtures';
import { addBlock, createContentPage, UPLOADS_DIR } from './helpers';

test.describe('Simplelayout Custom Template', () => {
  test('Custom block template with variables', async ({ authenticatedPage: page }) => {
    await createContentPage(page, 'A page');

    await addBlock(page, 'A Block', 'Text');

    // Navigate to Contents and add Image
    page.on('dialog', dialog => dialog.dismiss());
    await page.hover('#app .card-header');
    await page.click('main button:has-text("Actions")');
    await page.click('main a:has-text("Contents (Listing)")');

    await page.goto('/plone/a-page/a-block/++add++Image');
    await page.locator('main .form-control').nth(2).click();
    await page.locator('main .form-control').nth(2).setInputFiles(
      path.join(UPLOADS_DIR, 'valley_house-1920x1080 2.jpg'));
    await page.click('main button:has-text("Save")');

    // Configure custom template in dexterity-types
    await page.goto('/plone/@@dexterity-types/Block');
    await page.locator('header').nth(1).locator('a:has-text("Block Template")').click();
    await page.fill('main [name="form.widgets.template"]',
      "<div id='anyID'>{{ block['title'] }}</div> <div id='anyID2'>There is {{ getContents().length }} items in this block</div>");
    await page.click('main button:has-text("Save")');

    // Verify template rendering
    await page.click('#portal-globalnav a:has-text("A page")');
    await expect(page.locator('#anyID')).toHaveText('A Block');
    await expect(page.locator('#anyID2')).toHaveText('There is 1 items in this block');
  });
});
