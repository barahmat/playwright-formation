import { Page } from "@playwright/test";
import { inventoryLocators } from "../locators/inventory.locators";

export class InventoryPage {
    readonly locators;

    constructor(private page: Page){
        this.locators = inventoryLocators(page);
    }
 
    async ajouterPremierProduit(){
        await this.locators.boutonAjout.first().click();
    }

    async supprimerPremierProduit(){
        await this.locators.supprimerProduit.click();
    }


}