import { test, expect } from '@playwright/test';

test.describe('Shop App Basic Navigation', () => {
  test('should display the main heading', async ({ page }) => {
    await page.goto('/');
    
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Shop Demo App');
  });

  test('should display UI Components Demo card', async ({ page }) => {
    await page.goto('/');
    
    const card = page.locator('text=UI Components Demo');
    await expect(card).toBeVisible();
    
    const description = page.locator('text=This demo shows components from all three packages working together!');
    await expect(description).toBeVisible();
  });

  test('should have three button variants', async ({ page }) => {
    await page.goto('/');
    
    const primaryButton = page.getByRole('button', { name: 'Primary Button' });
    const secondaryButton = page.getByRole('button', { name: 'Secondary Button' });
    const dangerButton = page.getByRole('button', { name: 'Danger Button' });
    
    await expect(primaryButton).toBeVisible();
    await expect(secondaryButton).toBeVisible();
    await expect(dangerButton).toBeVisible();
  });

  test('should show alert when buttons are clicked', async ({ page }) => {
    await page.goto('/');
    
    // Listen for dialog events
    page.on('dialog', dialog => dialog.accept());
    
    const primaryButton = page.getByRole('button', { name: 'Primary Button' });
    await primaryButton.click();
    
    // Alert should be triggered (handled by dialog listener)
  });
});