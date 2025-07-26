import { test, expect } from '../../fixtures/PageFixture'



test.describe('Validate login page', () => {
    
    test('validate login page elements @Smoke', async ({ loginPage }) => {
       
       await expect(loginPage.appLogo).toBeVisible()
       await expect(loginPage.appTitle).toBeVisible()
       await expect(loginPage.portalSubtitle).toBeVisible()
       await expect(loginPage.providerPortal).toBeVisible()
       await expect(loginPage.memberPortal).toBeVisible()
       await expect(loginPage.demoProviderPortal).toBeVisible()
       await expect(loginPage.demoMemberPortal).toBeVisible()
    })

    test('Validate Successful Member login @Smoke', async ({ loginPage }) => {
        await loginPage.navigateToMemberLogin()
        await expect(loginPage.memberLoginSign).toBeVisible()
        await loginPage.memberLogin(process.env.patientUsername!,process.env.patientPassword!)
        await expect(loginPage.page).toHaveURL(/\/patient\/dashboard/)
    })
})