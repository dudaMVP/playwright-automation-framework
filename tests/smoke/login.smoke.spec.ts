import { test, expect } from '../../fixtures/PageFixture'



test.describe('Smoke Suite - Critical Functions Only', () => {
    
    test('validate login page elements @Smoke', async ({ loginPage }) => {
       
       await expect(loginPage.appLogo).toBeVisible()
       await expect(loginPage.appTitle).toBeVisible()
       await expect(loginPage.portalSubtitle).toBeVisible()
       await expect(loginPage.providerPortal).toBeVisible()
       await expect(loginPage.memberPortal).toBeVisible()
       await expect(loginPage.demoProviderPortal).toBeVisible()
       await expect(loginPage.demoMemberPortal).toBeVisible()
    })

    test('Validate Successful Member login @Smoke @Login', async ({ memberLoginPage }) => {
        console.log(memberLoginPage.page.url())
        await memberLoginPage.memberLogin()
        await expect(memberLoginPage.page).toHaveURL(/\/patient\/dashboard/)
    })

    
 })