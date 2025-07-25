import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'



test.describe('Validate login page', () => {
    
    test('validate login page elements', async ({ page }) => {
       await page.goto('/')
       const loginPage = new LoginPage(page)
        await expect(loginPage.appLogo).toBeVisible()
       await expect(loginPage.appTitle).toBeVisible()
       await expect(loginPage.portalSubtitle).toBeVisible()
       await expect(loginPage.providerPortal).toBeVisible()
       await expect(loginPage.memberPortal).toBeVisible()
       await expect(loginPage.demoProviderPortal).toBeVisible()
       await expect(loginPage.demoMemberPortal).toBeVisible()
    })
})