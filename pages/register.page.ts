import { Page, expect, Locator } from "@playwright/test";

export class RegisterPage {
  firstNameField: Locator;
  lastNameField: Locator;
  emailField: Locator;
  address1field: Locator;
  cityField: Locator;
  regionFieldDropdown: Locator;
  countryFieldDropdown: Locator;
  loginNameField: Locator;
  passwordField: Locator;
  passwordConfirmField: Locator;

  constructor(protected page: Page) {
    this.firstNameField = this.page.locator("#AccountFrm_firstname");
    this.lastNameField = this.page.locator("#AccountFrm_lastname");
    this.emailField = this.page.locator("#AccountFrm_email");
    this.address1field = this.page.locator("#AccountFrm_address_1");
    this.cityField = this.page.locator("#AccountFrm_city");
    this.regionFieldDropdown = this.page.locator("#AccountFrm_zone_id");
    this.countryFieldDropdown = this.page.locator("#AccountFrm_country_id");
    this.loginNameField = this.page.locator("#AccountFrm_loginname");
    this.passwordField = this.page.locator("#AccountFrm_password");
    this.passwordConfirmField = this.page.locator("#AccountFrm_confirm");
  }

  async fillRegistrationForm(
    firstName: string,
    lastName: string,
    email: string,
    address1: string,
    city: string,
    country: string,
    region: string,
    loginName: string,
    password: string,
    passwordConfirmation: string
  ): Promise<void> {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.emailField.fill(email);
    await expect(this.firstNameField).toHaveValue(firstName);
    await expect(this.lastNameField).toHaveValue(lastName);
    await expect(this.emailField).toHaveValue(email);
    await this.address1field.fill(address1);
    await this.cityField.fill(city);
    await this.countryFieldDropdown.selectOption(country);
    await this.regionFieldDropdown.selectOption(region);
    await expect(this.address1field).toHaveValue(address1);
    await expect(this.cityField).toHaveValue(city);
    await expect(this.regionFieldDropdown).toHaveValue(region);
    await expect(this.countryFieldDropdown).toHaveValue(country);
    await this.loginNameField.fill(loginName);
    await this.passwordField.fill(password);
    await this.passwordConfirmField.fill(passwordConfirmation);
    await expect(this.passwordConfirmField).toHaveValue(password);
  }
}
