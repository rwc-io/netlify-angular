import { test, expect } from '@playwright/test';

test('should display app title', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1.card-title')).toContainText('netlify-angular');
});
