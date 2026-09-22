import { test, expect } from '@playwright/test'

test('connexion avec des identifiants valides', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL(/inventory/);
});


test("connexion bloquée pour l'utilisateur verrouillé", async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();

    const messageErreur = page.getByRole('alert');

    await expect(messageErreur).toBeVisible();
    await expect(messageErreur).toContainText(/sadface/i); 
    
});