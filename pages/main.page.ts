import { Page, expect, Locator } from "@playwright/test";
import { urls } from "../helpers/data";

export class MainPage {
  loginInput: Locator;
  passwordInput: Locator;
  titlePage: string;
  loginOrRegisterButton: Locator;
  apparelLink: Locator;
  tshirtLink: Locator;
  heading: Locator;

  constructor(protected page: Page) {
    this.loginInput = this.page.locator("#loginFrm_loginname");
    this.passwordInput = this.page.locator("#pass");
    this.titlePage = "A place to practice your automation skills!";
    this.loginOrRegisterButton = this.page.locator("#customer_menu_top");
    this.apparelLink = this.page.getByRole("link", {
      name: "Apparel & accessories",
    });
    this.tshirtLink = this.page
      .locator("#categorymenu")
      .getByRole("link", { name: "T-shirts" });
    this.heading = this.page.locator(".heading1");
  }

  async openMainPage(): Promise<void> {
    await this.page.goto(urls.automationTestStoreURL);
    await expect(this.page.title()).resolves.toEqual(this.titlePage);
  }

  async openLoginOrRegister(): Promise<void> {
    await this.loginOrRegisterButton.click();
  }

  async fillInputPassword(password: string): Promise<void> {
    await this.passwordInput.fill("rejognoireg");
  }

  async goToTshirtPage(): Promise<void> {
    await this.apparelLink.hover();
    await this.tshirtLink.click();
    await expect(this.heading).toContainText("T-shirts")
  }

  async method1(userName: string, password: string): Promise<void> {}
  //
}
