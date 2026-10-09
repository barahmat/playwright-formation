import { test, expect } from './fixtures';
import { LoginPage } from '../pages/login.page';


// Jeux de données : ajouter une ligne = ajouter un test
const utilisateurs = [
  { nom: process.env.USER_STANDARD ?? 'standard_user', erreurAttendue: false },
  { nom: process.env.USER_LOCKED ?? 'locked_out_user', erreurAttendue: true },
];

for (const utilisateur of utilisateurs) {
  test(`connexion de ${utilisateur.nom}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.seConnecter(utilisateur.nom, process.env.PASSWORD ?? '');

    if (utilisateur.erreurAttendue) {
      await expect(loginPage.locators.messageErreur).toBeVisible();
      await expect(loginPage.locators.messageErreur).toContainText(/sadface/i);
    } else {
      await expect(page).toHaveURL(/inventory/);
    }
  });
}