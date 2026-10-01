import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';


test("ajout d'un produit au panier", async ({ page }) => {
   const loginPage = new LoginPage(page);
   const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.seConnecter('standard_user','secret_sauce');

    await expect(inventoryPage.locators.boutonAjout).toHaveCount(6);
    await inventoryPage.ajouterPremierProduit();
    await expect(inventoryPage.locators.badgePanier).toHaveText('1');

});

test("suppression d'un produit du panier", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.seConnecter('standard_user','secret_sauce');

     await inventoryPage.ajouterPremierProduit();

    await expect(inventoryPage.locators.badgePanier).toHaveText('1');

    await inventoryPage.supprimerPremierProduit();
    
    await expect(inventoryPage.locators.badgePanier).toBeHidden();
    await expect(inventoryPage.locators.boutonAjout).toHaveCount(6);
});