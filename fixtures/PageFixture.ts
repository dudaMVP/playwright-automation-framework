import { test as base,  } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { MemberLoginPage } from "../pages/MemberLoginPage"

type PageFixtures = {

loginPage: LoginPage
memberLoginPage: MemberLoginPage

}


export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.page.goto('/')
        await use(loginPage)
    }, 
    memberLoginPage: async ({ loginPage }, use ) => {
        const memberLoginPage = new MemberLoginPage(loginPage.page)
        await memberLoginPage.page.goto('/')
        await memberLoginPage.navigateToMemberLogin()
        await use(memberLoginPage)
    }
})


export { expect } from '@playwright/test'