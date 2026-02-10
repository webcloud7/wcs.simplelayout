import { test, expect } from './fixtures';
import { addBlock, createContentPage } from './helpers';

test.describe('Simplelayout Collapsable Block', () => {
  test('Enable and toggle collapsable behavior', async ({ authenticatedPage: page }) => {
    await createContentPage(page, 'test page');

    await addBlock(page, 'Title', 'TExt');

    // Edit block to enable collapsable
    await page.addStyleTag({ content: '.sl-add-block-controls { visibility: visible !important; }' });
    await page.hover('#app .card-header');
    await page.locator('main button:has-text("Actions")').click();
    await page.locator('main a:has-text("Edit")').waitFor({ state: 'visible' });
    await page.locator('main a:has-text("Edit")').click();
    await page.click('#form-widgets-ICollapsableBlock-collapsable-0');
    await page.locator('main button:has-text("Save")').nth(1).click();
    await expect(page.locator('.sl-block-edit-form')).not.toBeVisible({ timeout: 10000 });

    // Verify collapsed state
    await expect(page.locator('.sl-block .card-body')).not.toBeVisible();
    await expect(page.locator('.sl-collapsable-button')).toHaveCount(1);
    await expect(page.locator('.sl-collapsable-button')).toHaveText('>');

    // Expand
    await page.click('main button:has-text(">")');
    await expect(page.locator('.sl-collapsable-button')).toHaveText('v');
    await expect(page.locator('.sl-block .card-body')).toBeVisible();
  });
});
