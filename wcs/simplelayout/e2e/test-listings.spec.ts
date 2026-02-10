import path from 'path';
import { test, expect } from './fixtures';
import { createContentPage, UPLOADS_DIR } from './helpers';

test.describe('Simplelayout Listings', () => {
  test('File listing and image listing blocks', async ({ authenticatedPage: page }) => {
    await createContentPage(page, 'a page');

    // Add FileListingBlock
    await page.hover('#app .card-header');
    await page.click('main button:has-text("Add")');
    await page.click('main a:has-text("FileListingBlock")');
    await page.fill('#form-widgets-IBlockTitle-title', 'File listing');
    await page.click('main button:has-text("Save")');

    page.on('dialog', dialog => dialog.dismiss());

    // Create media folder and upload files
    await page.click('main button:has-text("Click here to create a new Media Folder")');
    await page.click('main a:has-text("Upload")');
    await page.click('main button:has-text("Browse")');
    await page.setInputFiles('.dz-hidden-input', [
      path.join(UPLOADS_DIR, 'test.doc'),
      path.join(UPLOADS_DIR, 'test.docx'),
      path.join(UPLOADS_DIR, 'test.xlsx'),
      path.join(UPLOADS_DIR, 'test.pdf'),
      path.join(UPLOADS_DIR, 'a1.pdf'),
    ]);
    await page.locator('main button.upload-all').dispatchEvent('click');

    await expect(page.locator('.upload-container .previews .row')).toHaveCount(0, { timeout: 10000 });

    // Navigate to file listing and verify
    await page.click('main a:has-text("File listing")');
    await expect(page.locator('.sl-block table tbody tr')).toHaveCount(5);

    // Upload more files via media folder link
    await page.click('main a:has-text("Go the the referenced Media Folder")');
    await page.click('main a:has-text("Upload")');
    await page.click('main button:has-text("Browse")');
    await page.setInputFiles('.dz-hidden-input', [
      path.join(UPLOADS_DIR, 'island_coastal_cliff-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'valley_house-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'mirror_lakes_sunlight-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'norway_plants-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'fiordland_mountain_sunrise-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'winter_fantasy-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'fog_over_mountains-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'hot_spring_pool-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'golf_course-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'dee_why_beach_sunrise-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'trees_cloud_fog_landscape-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'kaibab_lake_arizona-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'northern_lights-1920x1080.jpg'),
      path.join(UPLOADS_DIR, 'a1.jpg'),
    ]);
    await page.locator('main button.upload-all').dispatchEvent('click');

    await expect(page.locator('.upload-container .previews .row')).toHaveCount(0, { timeout: 15000 });

    // Verify pagination
    await page.click('main a:has-text("File listing")');
    await expect(page.locator('.sl-block table tbody tr')).toHaveCount(10);
    await page.click('main a:has-text("Next")');
    await expect(page.locator('.sl-block table tbody tr')).toHaveCount(9);

    // Add ImageListingBlock
    await page.hover('#app .card-header');
    await page.click('main button:has-text("Actions")');
    await page.click('main a:has-text("Add")');
    await page.click('main a:has-text("ImageListingBlock")');
    await page.fill('#form-widgets-IBlockTitle-title', 'images');
    await page.click('main button:has-text("Save")');

    // Create media folder and upload images
    await page.click('main button:has-text("Click here to create a new Media Folder")');
    await page.click('main a:has-text("Upload")');
    await page.click('main button:has-text("Browse")');
    await page.setInputFiles('.dz-hidden-input', [
      path.join(UPLOADS_DIR, 'island_coastal_cliff-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'valley_house-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'mirror_lakes_sunlight-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'norway_plants-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'fiordland_mountain_sunrise-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'winter_fantasy-1920x1080 2.jpg'),
      path.join(UPLOADS_DIR, 'fog_over_mountains-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'hot_spring_pool-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'golf_course-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'dee_why_beach_sunrise-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'trees_cloud_fog_landscape-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'kaibab_lake_arizona-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'northern_lights-1920x1080 1.jpg'),
      path.join(UPLOADS_DIR, 'a2.jpg'),
    ]);
    await page.locator('main button.upload-all').dispatchEvent('click');

    await expect(page.locator('.upload-container .previews .row')).toHaveCount(0, { timeout: 10000 });

    // Verify image listing and pagination
    await page.click('main a:has-text("images")');
    await expect(page.locator('.sl-block .sl-image-listing')).toHaveCount(3);
    await expect(page.locator('.sl-block .sl-image-listing').nth(0)).toHaveText('a2.jpg');

    await page.locator('main a:has-text("Next")').nth(1).dispatchEvent('click');
    await expect(page.locator('.sl-block .sl-image-listing').nth(0)).toHaveText('fog_over_mountains-1920x1080 1.jpg');
    await expect(page.locator('.sl-block .sl-image-listing')).toHaveCount(3);

    await page.locator('main a:has-text("Next")').nth(1).dispatchEvent('click');
    await expect(page.locator('.sl-block .sl-image-listing').nth(0)).not.toHaveText('fog_over_mountains-1920x1080 1.jpg');
    await page.locator('main a:has-text("Next")').nth(1).dispatchEvent('click');
    await expect(page.locator('.sl-block .sl-image-listing').nth(0)).not.toHaveText(/island/);
    await page.locator('main a:has-text("Next")').nth(1).dispatchEvent('click');
    await expect(page.locator('.sl-block .sl-image-listing')).toHaveCount(2);
  });
});
