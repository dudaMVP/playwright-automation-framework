import { chromium } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { MemberLoginPage } from '../pages/MemberLoginPage'

export async function globalSetup(){

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    const loginPage = new MemberLoginPage(page)

    await loginPage.page.goto(process.env.baseURL!)
    await loginPage.navigateToMemberLogin()
    await loginPage.memberLogin()

    await page.context().storageState({path: 'storage/storageState.json'})
    console.log('Storage state saved')
    await browser.close()
}


export default globalSetup
