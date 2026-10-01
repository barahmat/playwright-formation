import { Page } from '@playwright/test'

export const loginLocators = (page: Page) => ({
    champIdentifiant: page.getByPlaceholder('Username'),
    champMotDePasse: page.getByPlaceholder('Password'),
    boutonConnexion: page.getByRole('button', {name: 'Login'}),
    messageErreur: page.getByRole('alert'),
})