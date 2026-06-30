import { test, expect } from '../../fixtures/testFixture';
import { USERS } from '../../constants/users';

test.describe('Login Functionality', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('@smoke Verify successful login', async ({ loginPage, page }) => {
        await loginPage.loginToApplication(USERS.STANDARD);
        await expect(page).toHaveURL(/inventory/);
    });
});