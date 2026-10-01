import { Page } from '@playwright/test';

export const inventoryLocators = (page: Page) => ({
    boutonAjout: page.getByRole('button', {name: /add to cart/i}),
    supprimerProduit: page.getByRole('button', {name: /remove/i}),
    badgePanier: page.locator('[data-test="shopping-cart-badge"]'),
})