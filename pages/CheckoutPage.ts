import { Page, Locator, Expect } from "@playwright/test"

export class CheckoutPage {

    page: Page;
    firstName: Locator;
    lastName: Locator;
    postalCode: Locator;
    continueBtn: Locator;
    finishBtn: Locator;
    orderComplitionMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.postalCode = page.getByPlaceholder("Zip/Postal Code");
        this.continueBtn = page.getByTestId("continue");
        this.finishBtn = page.getByTestId("finish");
        this.orderComplitionMsg = page.getByTestId("complete-header");
    }

    async submitPersonalInformation(fName: string, lName: string, pinCode: string
    ) {
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
        await this.postalCode.fill(pinCode);
        await this.continueBtn.click();
    }

    async orderSuccessMessage() {
        await this.finishBtn.click();
        return await this.orderComplitionMsg.innerText();
    }
}