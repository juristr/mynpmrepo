import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('should be responsive on mobile devices', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that main heading is still visible
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Shop Demo App');
    
    // Check that buttons are still accessible
    const primaryButton = page.getByRole('button', { name: 'Primary Button' });
    await expect(primaryButton).toBeVisible();
  });

  test('should be responsive on tablet devices', async ({ page }) => {
    // Set viewport to tablet size
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    // Check layout elements
    const productsSection = page.locator('h2', { hasText: 'Products Management' });
    await expect(productsSection).toBeVisible();
    
    const ordersSection = page.locator('h2', { hasText: 'Orders Management' });
    await expect(ordersSection).toBeVisible();
  });

  test('should handle different screen orientations', async ({ page }) => {
    // Portrait orientation
    await page.setViewportSize({ width: 414, height: 896 });
    await page.goto('/');
    
    const card = page.locator('text=UI Components Demo');
    await expect(card).toBeVisible();
    
    // Landscape orientation
    await page.setViewportSize({ width: 896, height: 414 });
    
    // Elements should still be visible
    await expect(card).toBeVisible();
    
    const buttons = page.locator('button').filter({ hasText: /Button/ });
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should maintain functionality on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');
    
    // Test that forms can still be toggled
    const addProductButton = page.getByRole('button', { name: 'Add Product' });
    await expect(addProductButton).toBeVisible();
    await addProductButton.click();
    
    const hideFormButton = page.getByRole('button', { name: 'Hide Form' });
    await expect(hideFormButton).toBeVisible();
  });

  test('should display properly on desktop', async ({ page }) => {
    // Standard desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    // Check that container has max-width constraint
    const container = page.locator('div').first();
    const box = await container.boundingBox();
    
    // Container should not exceed max-width (1200px based on the code)
    if (box) {
      expect(box.width).toBeLessThanOrEqual(1240); // 1200px + padding
    }
  });
});