import { Page, Locator, expect } from "@playwright/test"

export class CartPage {

    page: Page;
    productTitle: Locator;
    checkoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.getByTestId("inventory-item-name");
        this.checkoutBtn = page.locator("#checkout");
    }

    async getProductNames() {
        return await this.productTitle.allInnerTexts();
    }

    async navigateToCheckoutPage() {
        await this.checkoutBtn.click();
    }
}