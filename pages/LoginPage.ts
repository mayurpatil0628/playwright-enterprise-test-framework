import { Page, Locator, expect } from "@playwright/test"

export class LoginPage {

    page: Page;
    userName: Locator;
    password: Locator;
    loginBtn: Locator;
    errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByPlaceholder("Username");
        this.password = page.locator("[type=password]");
        this.loginBtn = page.getByTestId("login-button");
        this.errorMessage = page.getByTestId("error");
    }

    async loginToApplication(user: { username: string, password: string }) {
        await this.userName.fill(user.username);
        await this.password.fill(user.password);
        await this.loginBtn.click();
    }

    async validateErrorMessage(errorMsg: string) {
        await expect(this.errorMessage).toHaveText(errorMsg);
    }
}