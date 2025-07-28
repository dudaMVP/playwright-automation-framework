import { Page, Locator } from '@playwright/test'
import { LoginPage } from './LoginPage'

export class MemberLoginPage extends LoginPage {
    readonly page: Page
    readonly memberLoginLogo: Locator
    readonly getUsernameInput: Locator
    readonly getPasswordInput: Locator
    readonly signInButton: Locator

    constructor(page: Page) {
        
        
        super(page)
        this.page = page
        this.memberLoginLogo = this.page.locator('div').filter({ hasText: /^Member PortalAccess your insurance benefits and claims$/ }).getByRole('img')
        this.getUsernameInput = this.page.getByTestId('member-username-input')
        this.getPasswordInput = this.page.getByTestId('member-password-input')
        this.signInButton = this.page.getByTestId('member-login-submit')


    }

    async memberLogin() {
        await this.getUsernameInput.fill(process.env.patientUsername!)
        await this.getPasswordInput.fill(process.env.patientPassword!)
        await this.signInButton.click()
    }
}
