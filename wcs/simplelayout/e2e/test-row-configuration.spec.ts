import { test, expect } from './fixtures';
import { createContentPage } from './helpers';

test.describe('Simplelayout Row Configuration', () => {
  test('Configure row schema and edit row properties', async ({ authenticatedPage: page }) => {
    await createContentPage(page, 'A page');

    await expect(page.locator('.sl-add-row-controls button')).toHaveCount(4);

    // Navigate to dexterity-types Row Configuration
    await page.click('#personaltools-menulink');
    await page.click('#personaltools-plone_setup');
    await page.click('main .plone-icon.overview-icon.bi.bi-gem');
    await page.click('main span:has-text("ContentPage")');
    await page.locator('header').nth(1).locator('a:has-text("Row Configuration")').click();

    // Make code editor visible and set XML schema
    await page.evaluate(() => {
      const el = document.querySelector('.pat-code-editor');
      if (el) el.setAttribute('style', 'display:block !important');
    });
    await page.locator('.pat-code-editor').click();
    await page.keyboard.press('Control+a');
    await page.keyboard.press('Backspace');
    await page.locator('.pat-code-editor').fill(
      "<?xml version='1.0' encoding='utf8'?> <model xmlns=\"http://namespaces.plone.org/supermodel/schema\"> <schema>     <field name=\"show_in_right_column\" type=\"zope.schema.Bool\">       <description/>       <required>False</required>       <title>In rechter Spalte anzeigen</title>     </field> </schema> </model>");
    await page.click('main button:has-text("Apply")');

    // Navigate back and test row configuration
    await page.click('#portal-globalnav a:has-text("A page")');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('div.simplelayout-app')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('.btn.btn-warning img')).toHaveAttribute('alt', 'Edit row');

    await page.click('main [alt="Edit row"]');
    await page.locator('[name="form.widgets.show_in_right_column:list"]').waitFor({ state: 'visible' });
    await page.check('[name="form.widgets.show_in_right_column:list"]');
    await expect(page.locator('[name="form.widgets.show_in_right_column:list"]')).toBeChecked();
    await page.locator('button:has-text("Save"):visible').click();
    await page.locator('[name="form.widgets.show_in_right_column:list"]').waitFor({ state: 'hidden', timeout: 10000 });

    await page.reload();
    await page.waitForLoadState('networkidle');
    await expect(page.locator('div.simplelayout-app')).toBeVisible({ timeout: 10000 });
    await page.click('main [alt="Edit row"]');
    await page.locator('[name="form.widgets.show_in_right_column:list"]').waitFor({ state: 'visible' });
    await expect(page.locator('[name="form.widgets.show_in_right_column:list"]')).toBeChecked();
  });
});
