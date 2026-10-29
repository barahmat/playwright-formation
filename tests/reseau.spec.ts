import { test, expect } from './fixtures';

test('connexion sans charger les images', async ({ pageConnectee, inventoryPage }) => {
  // Je déclare : toute requête d'image sera bloquée
  await pageConnectee.route('**/*.{png,jpg,jpeg,svg,gif}', route => route.abort());

  // La fixture a déjà fait le login -> on arrive sur le catalogue
  // Toutes les requêtes d'images QUI RESTENT À VENIR seront bloquées
  await expect(inventoryPage.locators.boutonAjout).toHaveCount(6);
});

test('observer les requêtes réseau', async ({ page }) => {
  // Je regarde TOUT ce qui passe, mais je laisse tout passer
  await page.route('**/*', async route => {
    console.log('→', route.request().method(), route.request().url());
    await route.continue();
  });

  await page.goto(process.env.BASE_URL ?? 'https://www.saucedemo.com');
});


//Commenté car saucedemo n'a pas d'API -> squelette à utiliser dans des vrais projets
// test('simuler une API en erreur', async ({ page }) => {
//   // L'interface recevra un 500 sans que l'API réelle ne soit touchée
//   await page.route('**/api/commandes', async route => {
//     await route.fulfill({
//       status: 500,
//       contentType: 'application/json',
//       body: JSON.stringify({ error: 'service indisponible' }),
//     });
//   });
//   // ... puis on vérifie que l'interface affiche son message d'erreur
// });



test('délibérément instable', async () => {
  test.skip(true, 'QUARANTAINE : instable - en investigation, ticket #42');

  expect(Math.random()).toBeGreaterThan(0.5);
});