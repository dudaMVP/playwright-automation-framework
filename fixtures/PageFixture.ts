import { test as base,  } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"

type PageFixtures = {

loginPage: LoginPage

}


export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.page.goto('/')
        await use(loginPage)
    } 
})


export { expect } from '@playwright/test'