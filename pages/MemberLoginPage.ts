import { Page, Locator } from '@playwright/test'
import { LoginPage } from './LoginPage'

export class MemberLoginPage extends LoginPage {
    readonly memberLoginCard: Locator
    readonly getUsernameInput: Locator
    readonly getPasswordInput: Locator
    readonly signInButton: Locator
    readonly memberLoginError: Locator

    constructor(page: Page) {
        
        
        super(page)
        this.memberLoginCard = this.page.locator('#member-login-card')
        this.getUsernameInput = this.page.getByTestId('member-username-input')
        this.getPasswordInput = this.page.getByTestId('member-password-input')
        this.signInButton = this.page.getByTestId('member-login-submit')
        this.memberLoginError = this.page.locator('#member-login-error')


    }

    async memberLogin() {
        await this.getUsernameInput.fill(process.env.PATIENT_USERNAME!)
        await this.getPasswordInput.fill(process.env.PATIENT_PASSWORD!)
        await this.signInButton.click()
    }
    async memberLoginIncorrectUsername() {
        await this.getUsernameInput.fill('hiJOHN')
        await this.getPasswordInput.fill(process.env.PATIENT_PASSWORD!)
        await this.signInButton.click()
    }
}
