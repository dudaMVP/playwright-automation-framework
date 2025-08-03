import { test, expect } from './../../fixtures/PageFixture'

test.describe('Member Login Test Cases @Regression', () => {
    test('fixed', async ({ memberLoginPage }) => {

    })
})
//     test('Login with invalid username and correct password → error message appears @Smoke', async ({ loginPage }) => {
//         await loginPage.navigateToMemberLogin()
//         aw:qait expect(loginPage.memberLoginSign).toBeVisible()
//         await loginPage.memberLogin('invalidUsername', process.env.patientPassword!)
//         await expect(loginPage.invalidCredentialsError).toBeVisible()
//         await expect(loginPage.invalidCredentialsError).toHaveText('Login FailedInvalid credentials. Please try again.')
//     })

//     test('Login with invalid username and invalid password → error message appears @Smoke', async ({ loginPage }) => {
//         await loginPage.navigateToMemberLogin()
//         await expect(loginPage.memberLoginSign).toBeVisible()
//         await loginPage.memberLogin('invalidUsername', 'invalidPassword')
//         await expect(loginPage.invalidCredentialsError).toBeVisible()
//         await expect(loginPage.invalidCredentialsError).toHaveText('Login FailedInvalid credentials. Please try again.')
//     })
//     test('Login with empty username and empty password → error message appears @Smoke', async ({ loginPage }) => {
//         await loginPage.navigateToMemberLogin()
//         await expect(loginPage.memberLoginSign).toBeVisible()
//         await loginPage.memberLogin('', '')
//         await expect(loginPage.emptyUsernameError).toBeVisible()
//         await expect(loginPage.emptyPasswordError).toBeVisible()
//         await expect(loginPage.emptyUsernameError).toHaveText('Username is required')
//         await expect(loginPage.emptyPasswordError).toHaveText('Password is required')
//     })
//     test('Login with empty username and correct password → error message appears @Smoke', async ({ loginPage }) => {
//         await loginPage.navigateToMemberLogin()
//         await expect(loginPage.memberLoginSign).toBeVisible()
//         await loginPage.memberLogin('', process.env.patientPassword!)
//         await expect(loginPage.emptyUsernameError).toBeVisible()
//         await expect(loginPage.emptyPasswordError).not.toBeVisible()
//         await expect(loginPage.emptyUsernameError).toHaveText('Username is required')
//     })
//     test.only('Login with correct username and empty password → error message appears @Smoke', async ({ loginPage }) => {
//         await loginPage.navigateToMemberLogin()
//         await expect(loginPage.memberLoginSign).toBeVisible()
//         await loginPage.memberLogin(process.env.patientUsername!, '')
//         await expect(loginPage.emptyUsernameError).not.toBeVisible()
//         await expect(loginPage.emptyPasswordError).toBeVisible()
//         await expect(loginPage.emptyPasswordError).toHaveText('Password is required')
//     })

