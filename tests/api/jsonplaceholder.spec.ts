import { test, expect } from '@playwright/test';

test('récupérer le post n°1', async ({ request }) => {
  const reponse = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  await expect(reponse).toBeOK();                    // statut 2xx
  expect(reponse.status()).toBe(200);                // vérif précise du code

  const corps = await reponse.json();
  expect(corps.userId).toBe(1);
  expect(corps.title).toBeTruthy();                  // le titre existe et n'est pas vide
});

test('lister les posts utilisateur 1', async ({ request }) => {
  const reponse = await request.get('https://jsonplaceholder.typicode.com/posts?userId=1');

  await expect(reponse).toBeOK();                    // statut 2xx
  expect(reponse.status()).toBe(200);                // vérif précise du code

  const corps = await reponse.json();                 
  expect(corps.length).toEqual(10);
});

test('créer un post', async ({ request }) => {
    const reponse = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: { title: 'Formation Playwright', body: 'Mon premier POST', userId: 1 },
    });

  await expect(reponse).toBeOK();                    // statut 2xx
  expect(reponse.status()).toBe(201);                // vérif précise du code

  const corps = await reponse.json();                 
  expect(corps.id).toEqual(101);
});