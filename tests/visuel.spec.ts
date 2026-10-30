import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('la page de connexion na pas change visuellement', async ({ page }) => {
  test.skip(!!process.env.CI, 'comparaison visuelle locale uniquement - baseline Linux a generer');
    
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await expect(page).toHaveScreenshot('page-connexion.png');
});