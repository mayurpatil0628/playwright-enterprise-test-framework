import { test, expect } from '../../fixtures/testFixture';
import { USERS } from '../../constants/users';
import { checkoutUser } from "../../test-data/userData"
import { PRODUCTS } from "../../test-data/products"


test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test("Validate user is able to place order successfully", { tag: ['@regression'] }, async ({ loginPage, inventoryPage, cartPage, checkoutPage, page }) => {
    const productName = PRODUCTS.ONESIE;

    await test.step('Login with standard user', async () => {
        await loginPage.loginToApplication(USERS.STANDARD);
        await expect(page).toHaveURL(/inventory/);
    });

    await test.step('Add product to cart', async () => {
        await inventoryPage.addProductToTheCart(productName);
    });

    await test.step('Open cart and validate product', async () => {
        await inventoryPage.openCartPage();
        await expect(page).toHaveURL(/cart/);
        const products = await cartPage.getProductNames();
        expect(products).toContain(productName);
    });

    await test.step('Complete checkout', async () => {
        await cartPage.navigateToCheckoutPage();
        await checkoutPage.submitPersonalInformation(checkoutUser.firstName, checkoutUser.lastName, checkoutUser.postalCode
        );
    });

    await test.step('Verify order confirmation', async () => {
        expect(await checkoutPage.orderSuccessMessage()).toBe("Thank you for your order!");
        await expect(page).toHaveURL(/checkout-complete/);

    });
})