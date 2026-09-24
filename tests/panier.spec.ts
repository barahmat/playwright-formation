import { test, expect } from '@playwright/test'

test("ajout d'un produit au panier", async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name:'Login'}).click();

    //il y a 6 boutons "Add to cart" sur le catalogue
    await expect(page.getByRole('button', {name: /Add to cart/i})).toHaveCount(6);

    //on ajoute le 1er produit
    await page.getByRole('button', {name: /add to cart/i}).first().click();

    //Le badge du panier affiche "1"
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
});