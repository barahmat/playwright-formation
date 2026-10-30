# Framework de tests automatisés - Playwright + TypeScript

Framework E2E et API construit de zéro : architecture Page Object Model,
locators séparés par fonctionnalité, BDD en français, data-driven,
tests visuels, émulation mobile et intégration CI GitLab.

## Ce que ce framework couvre

- **Tests E2E** web et mobile (Pixel 5 / iPhone émulés) - Playwright
- **Tests d'API** : statuts, corps de réponse - APIRequestContext
- **BDD** : scénarios Gherkin en français (playwright-bdd)
- **Architecture** : Page Object Model + un fichier de locators par fonctionnalité
- **Data-driven** : un test généré par jeu de données
- **Tests visuels** : comparaison avec références versionnées
- **CI GitLab** : pipeline autonome à chaque push, rapports archivés même en échec
  (https://gitlab.com/ali-barahmat/playwright-formation/-/pipelines)
- **Reporting** : HTML + Allure (sévérités, captures, étapes Gherkin)

## Architecture

    tests/            les tests - lisibles, métier (pattern AAA)
      fixtures.ts     fixtures maison : pageConnectee, pages automatiques
      api/            tests d'API
    pages/            les ACTIONS - comment on interagit
    locators/         les LOCATORS - avec quoi (un fichier par fonctionnalité)
    features/         scénarios Gherkin en français
    steps/            définitions d'étapes BDD
    .env.example      variables d'environnement (aucun secret dans le code)

Règle d'or : locators = avec quoi · pages = comment · tests = ce que je vérifie.
Si l'UI change, je ne touche qu'aux locators.

## Démarrage

    npm install
    cp .env.example .env        # puis renseigner les valeurs
    npx bddgen                  # générer les specs BDD
    npx playwright test         # tout lancer

## Commandes utiles

    npx playwright test --project=chromium       # un seul navigateur
    npx playwright test --headed                 # fenêtre visible
    npx playwright test --ui                     # UI Mode (timeline, watch)
    npx playwright test --trace on               # tracer chaque test
    npx playwright show-report                   # rapport HTML
    npx playwright codegen https://www.saucedemo.com

## Choix techniques en une ligne chacun

- **getByRole en priorité** : les tests interrogent l'arbre d'accessibilité,
  pas le DOM - ils survivent aux refontes
- **Fixtures (pageConnectee)** : l'Arrange automatisé, chaque test reste isolé
- **retries sur CI + quarantaine** : les flaky sont détectés (repeat-each),
  marqués, isolés avec leur raison - jamais ignorés en silence
- **Artefacts when: always** : rapports disponibles surtout à l'échec

## Règles du projet

- Ne jamais modifier les fichiers générés (*.feature.spec.js, test-results/)
- git status avant chaque commit - vérifier que .env n'est jamais suivi

## Auteur

Ali Barahmat - Ingénieur QA (Fonctionnel & Automatisation)
LinkedIn : https://www.linkedin.com/in/ali-barahmat
GitHub : https://github.com/barahmat