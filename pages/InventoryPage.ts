import { Page, Locator} from "@playwright/test"

export class InventoryPage {

    page: Page;
    allProducts: Locator;
    cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.allProducts = page.getByTestId("inventory-item-description");
        this.cartIcon = page.locator("[id='shopping_cart_container']");
    }

    async addProductToTheCart(productName: string) {
        const productNamesLocator = this.allProducts.getByTestId("inventory-item-name");
        const names = await productNamesLocator.allInnerTexts();
        const index = names.findIndex(name => name === productName);
        if (index !== -1) {
            const productCard = this.allProducts.nth(index);
            const addButton = productCard.getByRole('button', { name: 'Add to cart' });
            await addButton.click();
        }
    }

    async openCartPage() {
        await this.cartIcon.click();
    }

}