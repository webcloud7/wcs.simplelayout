import path from 'path';
import { Page } from '@playwright/test';

export const UPLOADS_DIR = path.resolve(__dirname, '../../../_uploads_');

export async function createContentPage(page: Page, title: string) {
  await page.click('#plone-contentmenu-factories span:has-text("Add new")');
  await page.click('#contentpage');
  await page.fill('#form-widgets-IBasic-title', title);
  await page.click('main button:has-text("Save")');
}

export async function addBlock(page: Page, title: string, text: string) {
  await page.hover('#app .card-header');
  await page.click('main button:has-text("Add")');
  await page.click('main a:has-text("Block")');

  const iframe = page.frameLocator('main .tox-edit-area__iframe');
  await iframe.locator('html').click();

  await page.fill('#form-widgets-IBlockTitle-title', title);
  await iframe.locator('body').fill(text);

  await page.click('main button:has-text("Save")');
}
