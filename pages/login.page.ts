import { Page } from '@playwright/test'

import { loginLocators } from '../locators/login.locators'

export class LoginPage {
    readonly locators;

    constructor(private page: Page){
        this.locators = loginLocators(page);
    }

    async goto(){
        await this.page.goto('/');
    }

    async seConnecter(identifiant: string, motDePasse: string) {
        await this.locators.champIdentifiant.fill(identifiant);
        await this.locators.champMotDePasse.fill(motDePasse);
        await this.locators.boutonConnexion.click();
    }
}