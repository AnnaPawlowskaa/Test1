import { Page, expect, Locator } from "@playwright/test";

export class LoginOrRegisterPage {

    registerButton: Locator;
    firstField: Locator;


    constructor(protected page: Page) {
        this.registerButton = this.page.locator(".fa-check");
        this.firstField = this.page.locator("#AccountFrm_firstname")
    
    }

    async openRegistrationForm(): Promise<void> {
        await this.registerButton.click()
        await expect(this.firstField).toBeVisible()
    }
}