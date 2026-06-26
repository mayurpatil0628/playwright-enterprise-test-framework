import { test, expect } from '../../fixtures/testFixture';
import { LoginPage } from '../../pages/LoginPage';
import { USERS } from '../../constants/users';
import { negativeScenarios } from "../../test-data/loginTestData"

let loginPage: LoginPage;

test.describe('Login Functionality', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto('/');
    });

    test('Verify successful login', async ({ loginPage, page }) => {
        await loginPage.loginToApplication(USERS.STANDARD);
        await expect(page).toHaveURL(/inventory/);
    });

    negativeScenarios.forEach(({ name, user, error }) => {
        test(`Verify error message for ${name}`, async () => {
            await loginPage.loginToApplication(user);
            await loginPage.validateErrorMessage(error);
        });

    });
});