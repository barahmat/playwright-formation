import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page';


test('connexion avec des identifiants valides', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.seConnecter('standard_user','secret_sauce');


    await expect(page).toHaveURL(/inventory/);
});


test("connexion bloquée pour l'utilisateur verrouillé", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.seConnecter('locked_out_user','secret_sauce');

    await expect(loginPage.locators.messageErreur).toBeVisible();
    await expect(loginPage.locators.messageErreur).toContainText(/sadface/i);
    
});