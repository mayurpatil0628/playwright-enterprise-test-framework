import { test, expect } from '../../fixtures/testFixture';
import { USERS } from '../../constants/users';

test.describe('Login Functionality', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Verify successful login', { tag: ['@smoke'] }, async ({ loginPage, page }) => {
        await loginPage.loginToApplication(USERS.STANDARD);
        await expect(page).toHaveURL(/inventory/);
    });
});