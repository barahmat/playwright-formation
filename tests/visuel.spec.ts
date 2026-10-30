import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('la page de connexion na pas change visuellement', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  //await loginPage.locators.champIdentifiant.fill('du texte qui change tout');

  await expect(page).toHaveScreenshot('page-connexion.png');
});