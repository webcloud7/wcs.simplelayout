import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './wcs/simplelayout/e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: process.env.CI
    ? [['junit', { outputFile: '/tmp/test-results/playwright/results.xml' }], ['html']]
    : 'html',
  use: {
    baseURL: process.env.E2E_BASE_URL || 'http://localhost:65035/plone',
    trace: 'on-first-retry',
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true,
    },
    viewport: { width: 1800, height: 1500 },
  },
  outputDir: '/tmp/screenshots',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
