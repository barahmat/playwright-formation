// Generated from: features/panier.feature
import { test } from "playwright-bdd";

test.describe('Gestion du panier', () => {

  test('Ajout d\'un produit au panier', async ({ Given, When, Then, page }) => { 
    await Given('je suis connecté en tant que "standard_user"', null, { page }); 
    await When('j\'ajoute le premier produit au panier', null, { page }); 
    await Then('le badge du panier affiche "1"', null, { page }); 
  });

  test('Suppression d\'un produit du panier', async ({ Given, When, Then, And, page }) => { 
    await Given('je suis connecté en tant que "standard_user"', null, { page }); 
    await And('j\'ai ajouté le premier produit au panier', null, { page }); 
    await When('je supprime le premier produit du panier', null, { page }); 
    await Then('le badge du panier a disparu', null, { page }); 
  });

  test('Le catalogue affiche 6 produits', async ({ Given, Then, page }) => { 
    await Given('je suis connecté en tant que "standard_user"', null, { page }); 
    await Then('le catalogue affiche "6" produits', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/panier.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Etant donné que je suis connecté en tant que \"standard_user\"","stepMatchArguments":[{"group":{"start":29,"value":"\"standard_user\"","children":[{"start":30,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"Quand j'ajoute le premier produit au panier","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Alors le badge du panier affiche \"1\"","stepMatchArguments":[{"group":{"start":27,"value":"\"1\"","children":[{"start":28,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Etant donné que je suis connecté en tant que \"standard_user\"","stepMatchArguments":[{"group":{"start":29,"value":"\"standard_user\"","children":[{"start":30,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Et que j'ai ajouté le premier produit au panier","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"Quand je supprime le premier produit du panier","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Alors le badge du panier a disparu","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Etant donné que je suis connecté en tant que \"standard_user\"","stepMatchArguments":[{"group":{"start":29,"value":"\"standard_user\"","children":[{"start":30,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Alors le catalogue affiche \"6\" produits","stepMatchArguments":[{"group":{"start":21,"value":"\"6\"","children":[{"start":22,"value":"6","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end