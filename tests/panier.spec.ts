import { test, expect } from './fixtures';
import { severity } from 'allure-js-commons'; 

test("ajout d'un produit au panier", async ({ pageConnectee, inventoryPage  }) => {
    
    severity('critical'); 

    await expect(inventoryPage.locators.boutonAjout).toHaveCount(6);
    await inventoryPage.ajouterPremierProduit();
    await expect(inventoryPage.locators.badgePanier).toHaveText('1');

    await test.info().attach('capture du panier', {
        body: await pageConnectee.screenshot(),
        contentType: 'image/png',
    });

});

test("suppression d'un produit du panier", async ({ pageConnectee, inventoryPage }) => {
    await inventoryPage.ajouterPremierProduit();
    await expect(inventoryPage.locators.badgePanier).toHaveText('1');
    await inventoryPage.supprimerPremierProduit();
    await expect(inventoryPage.locators.badgePanier).toBeHidden();
    await expect(inventoryPage.locators.boutonAjout).toHaveCount(6);
});