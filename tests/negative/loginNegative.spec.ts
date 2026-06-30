import { test, expect } from '../../fixtures/testFixture';
import { USERS } from '../../constants/users';
import { negativeScenarios } from "../../test-data/loginTestData"

test.describe('Negative Login Functionality', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    negativeScenarios.forEach(({ name, user, error }) => {
        test(`Verify error message for ${name}`, async ({ loginPage }) => {
            await loginPage.loginToApplication(user);
            await loginPage.validateErrorMessage(error);
        });

    });
});