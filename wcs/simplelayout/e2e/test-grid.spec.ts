import { test, expect } from './fixtures';

test.describe('Simplelayout Grid', () => {
  test('Add rows, columns, and change widths', async ({ authenticatedPage: page }) => {
    await page.click('#plone-contentmenu-factories span:has-text("Add new")');
    await page.click('#contentpage');
    await page.keyboard.press('ArrowLeft');
    await page.fill('#form-widgets-IBasic-title', 'test page');
    await page.click('main button:has-text("Save")');

    // Verify initial row count
    await expect(page.locator('.sl-row')).toHaveCount(1);

    // Add rows
    await page.locator('main button:has-text("+")').nth(3).click();
    await expect(page.locator('.sl-row')).toHaveCount(2);

    await page.locator('main button:has-text("+")').first().click();
    await expect(page.locator('.sl-row')).toHaveCount(3);

    // Remove a row
    await page.locator('.sl-row').nth(2).hover();
    await page.locator('main button:has-text("Remove")').nth(2).click();
    await expect(page.locator('.sl-row')).toHaveCount(2);

    // Split into 2 columns
    await page.locator('.sl-row').nth(1).hover();
    await page.locator('main button:has-text("+")').nth(5).click();
    await expect(page.locator('.sl-col.col-6')).toHaveCount(2);

    // Split into 3 columns
    await page.locator('.sl-row').nth(1).hover();
    await page.locator('main button:has-text("+")').nth(6).click();
    await expect(page.locator('.sl-col.col-4')).toHaveCount(3);

    // Split into 4 columns
    await page.locator('.sl-row').nth(1).hover();
    await page.locator('main button:has-text("+")').nth(7).click();
    await expect(page.locator('.sl-col.col-3')).toHaveCount(4);

    // Split into 5 columns
    await page.locator('.sl-row').nth(1).hover();
    await page.locator('main button:has-text("+")').nth(8).click();
    await expect(page.locator('.sl-row').nth(1).locator('.sl-col')).toHaveCount(5);
    // Split into 6 columns
    await page.locator('.sl-row').nth(1).hover();
    await page.locator('main button:has-text("+")').nth(9).click();
    await expect(page.locator('.sl-col.col-2')).toHaveCount(6);

    // Change column widths
    await page.locator('.sl-row').nth(0).hover();
    await page.locator('main button:has-text("+")').nth(2).click();
    await expect(page.locator('.sl-row').nth(0).locator('.sl-col')).toHaveCount(2);

    // Change 2nd column to 25%
    await page.locator('.sl-row').nth(0).locator('button:has-text("Width: 50%")').nth(1).hover({ force: true });
    await page.locator('.sl-row').nth(0).locator('button:has-text("Width: 50%")').nth(1).click();
    await page.locator('.sl-row').nth(0).locator('.dropdown-menu.show a:has-text("25%")').click();
    await expect(page.locator('.sl-row').nth(0).locator('.sl-col.col-3')).toHaveCount(1);

    // Change 1st column to 75%
    await page.locator('.sl-row').nth(0).locator('button:has-text("Width: 50%")').hover({ force: true });
    await page.locator('.sl-row').nth(0).locator('button:has-text("Width: 50%")').click();
    await page.locator('.sl-row').nth(0).locator('.dropdown-menu.show a:has-text("75%")').click();

    await expect(page.locator('.sl-col.col-9')).toHaveCount(1);
    await expect(page.locator('.sl-col.col-3')).toHaveCount(1);
  });
});
