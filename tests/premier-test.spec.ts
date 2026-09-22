import { test, expect } from '@playwright/test'

test('la page saucedemo se charge', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveTitle(/Test Swag Labs/);
});