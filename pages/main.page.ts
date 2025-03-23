import { Page, expect, Locator } from "@playwright/test";

export class MainPage {
    loginInput: Locator;
    passwordInput: Locator;
    titlePage: string;
    loginOrRegisterButton: Locator;

  constructor(protected page: Page) {
      this.loginInput = this.page.locator("#loginFrm_loginname");
      this.passwordInput = this.page.locator("#pass");
      this.titlePage = "A place to practice your automation skills!";
      this.loginOrRegisterButton = this.page.locator("#customer_menu_top")
  }
    
    async openMainPage(): Promise<void> {
        await this.page.goto("https://automationteststore.com")
        await expect(this.page.title()).resolves.toEqual(this.titlePage)
    }

    async openLoginOrRegister(): Promise<void> {
        await this.loginOrRegisterButton.click()
    }
    
    async fillInputPassword(password: string): Promise<void> {
        await this.passwordInput.fill("rejognoireg")
    }

  async method1(userName: string, password: string): Promise<void> {}
  //
  async method2(): Promise<void> {
    //
  }

  async verifyCorrectLogin(): Promise<void> {
    //
  }
}
