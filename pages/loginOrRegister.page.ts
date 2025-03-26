import { Page, expect, Locator } from "@playwright/test";
import 'dotenv/config'
import { data } from "../helpers/data";

export class LoginOrRegisterPage {

    registerButton: Locator;
    firstField: Locator;
    loginNameField: Locator;
    passwordField: Locator;
    loginButton: Locator;
    menuText: Locator;


    constructor(protected page: Page) {
        this.registerButton = this.page.locator(".fa-check");
        this.firstField = this.page.locator("#AccountFrm_firstname");
        this.loginNameField = this.page.locator("#loginFrm_loginname");
        this.passwordField = this.page.locator("#loginFrm_password");
        this.loginButton = this.page.getByRole('button', { name: ' Login' });
        this.menuText = this.page.getByRole('link', { name: 'Welcome back ' + data.firstName});

    }

    async openRegistrationForm(): Promise<void> {
        await this.registerButton.click()
        await expect(this.firstField).toBeVisible()
    }
    async fillLoginInputs(): Promise<void> {
        await this.loginNameField.fill(process.env.USER2 as string);
        await this.passwordField.fill(process.env.PASSWORD2 as string);
        await expect(this.loginNameField).toHaveValue(process.env.USER2 as string);
        await expect(this.passwordField).toHaveValue(process.env.PASSWORD2 as string);
    }
    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
        await expect(this.menuText).toBeVisible();
    }
    
}