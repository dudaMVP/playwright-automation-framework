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
    readonly memberLoginSign: Locator
    readonly memberUsernameInput: Locator
    readonly memberPasswordInput: Locator
    readonly signInButton: Locator


    constructor(page: Page) {
        this.page = page

        this.appLogo = this.page.locator('#app-logo')
        this.appTitle = this.page.locator('#app-title')
        this.portalSubtitle = this.page.locator('#portal-subtitle')
        this.providerPortal = this.page.locator('#select-provider-portal')
        this.memberPortal = this.page.locator('#select-member-portal')
        this.demoProviderPortal = this.page.locator('#demo-provider-login') 
        this.demoMemberPortal = this.page.locator('#demo-member-login')


        // member login portal (shares the same url in replit)
        this.memberLoginSign = this.page.locator('div[class="font-semibold tracking-tight text-lg"]')
        this.memberUsernameInput = this.page.getByTestId('username-input')
        this.memberPasswordInput = this.page.getByTestId('password-input')
        this.signInButton = this.page.getByTestId('login-submit')
    }

    async navigateToMemberLogin() {
        await this.memberPortal.click()
    }
    async memberLogin(username: string, password: string) {
        await this.memberUsernameInput.fill(username)
        await this.memberPasswordInput.fill(password)
        await this.signInButton.click()
    }

}