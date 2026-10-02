import { test, expect } from './fixtures';


test('connexion avec des identifiants valides', async ({ pageConnectee }) => {
    await expect(pageConnectee).toHaveURL(/inventory/);
});


test("connexion bloquée pour l'utilisateur verrouillé", async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.seConnecter('locked_out_user','secret_sauce');

    await expect(loginPage.locators.messageErreur).toBeVisible();
    await expect(loginPage.locators.messageErreur).toContainText(/sadface/i);
    
});