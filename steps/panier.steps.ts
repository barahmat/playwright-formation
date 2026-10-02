import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('je suis connecté en tant que {string}', async ({ page }, identifiant: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.seConnecter(identifiant, 'secret_sauce');
});

Given("j'ai ajouté le premier produit au panier", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.ajouterPremierProduit();
});

When("j'ajoute le premier produit au panier", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.ajouterPremierProduit();
});

When('je supprime le premier produit du panier', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.supprimerPremierProduit();
});

Then('le badge du panier affiche {string}', async ({ page }, valeur: string) => {
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.locators.badgePanier).toHaveText(valeur);
});

Then('le badge du panier a disparu', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.locators.badgePanier).toBeHidden();
});

Then('le catalogue affiche {string} produits', async ({ page }, valeur: string) => {
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.locators.boutonAjout).toHaveCount(Number(valeur));
});