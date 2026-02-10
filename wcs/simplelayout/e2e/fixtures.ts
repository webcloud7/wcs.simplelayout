import { test as base, expect } from '@playwright/test';
import { setup, teardown } from './fixture-helper';

export const test = base.extend({
  autoFixture: [async ({}, use) => {
    await setup();
    await use();
    await teardown();
  }, { auto: true }],

  authenticatedPage: async ({ page }, use) => {
    await page.goto('/plone/login');
    await page.fill('#__ac_name', 'admin');
    await page.fill('#__ac_password', 'secret');
    await page.click('button:has-text("Log in")');
    await page.waitForLoadState('networkidle');
    await use(page);
  }
});

export { expect };
