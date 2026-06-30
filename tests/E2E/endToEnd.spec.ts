import { test, expect } from '../../fixtures/testFixture';
import { USERS } from '../../constants/users';
import { checkoutUser } from "../../test-data/userData"

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test("@regression validate user is able to place order successfully", async ({ loginPage, inventoryPage, cartPage, checkoutPage, page }) => {
    const productName = "Sauce Labs Onesie";
    await loginPage.loginToApplication(USERS.STANDARD);
    await expect(page).toHaveURL(/inventory/);
    await inventoryPage.addProductToTheCart(productName);
    await inventoryPage.openCartPage();
    await expect(page).toHaveURL(/cart/);
    const products = await cartPage.getProductNames();
    expect(products).toContain(productName);
    await cartPage.navigateToCheckoutPage();
    await expect(page).toHaveURL(/checkout-step-one/);

    checkoutPage.submitPersonalInformation(
        checkoutUser.firstName,
        checkoutUser.lastName,
        checkoutUser.postalCode);
    await expect(page).toHaveURL(/checkout-step-two/);
    expect((await checkoutPage.validateOrderCompleteStatus()).match("Thank you for your order!")).toBeTruthy();
    await expect(page).toHaveURL(/checkout-complete/);
})