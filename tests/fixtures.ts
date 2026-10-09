import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

// Ce que mes tests pourront demander
type MesFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  pageConnectee: Page;
};

export const test = base.extend<MesFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  pageConnectee: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.seConnecter(process.env.USER_STANDARD ?? '', process.env.PASSWORD ?? '');
    await use(page);   // ici, le test démarre, déjà connecté
  },
});

export { expect };