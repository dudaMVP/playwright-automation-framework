import { Page, Locator } from '@playwright/test'


export class LoginPage {
    readonly page: Page
    readonly appLogo: Locator
    readonly appTitle: Locator
    readonly portalSubtitle: Locator
    readonly providerPortal: Locator
    readonly memberPortal: Locator
    readonly demoProviderPortal: Locator
    readonly demoMemberPortal: Locator


    constructor(page: Page) {
        this.page = page

        this.appLogo = this.page.locator('#app-logo')
        this.appTitle = this.page.locator('#app-title')
        this.portalSubtitle = this.page.locator('#portal-subtitle')
        this.providerPortal = this.page.locator('#select-provider-portal')
        this.memberPortal = this.page.locator('#select-member-portal')
        this.demoProviderPortal = this.page.locator('#demo-provider-login') 
        this.demoMemberPortal = this.page.locator('#demo-member-login')
    }

}