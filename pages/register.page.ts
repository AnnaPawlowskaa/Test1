import { Page, expect, Locator } from "@playwright/test";

export class RegisterPage {
  firstNameField: Locator;
  lastNameField: Locator;
  emailField: Locator;
  address1field: Locator;
  cityField: Locator;
  regionFieldDropdown: Locator;
  zipCodeField: Locator;
  countryFieldDropdown: Locator;
  loginNameField: Locator;
  passwordField: Locator;
  passwordConfirmField: Locator;
  privacyPolicyCheckbox: Locator;
  registerButton: Locator;

  constructor(protected page: Page) {
    this.firstNameField = this.page.locator("#AccountFrm_firstname");
    this.lastNameField = this.page.locator("#AccountFrm_lastname");
    this.emailField = this.page.locator("#AccountFrm_email");
    this.address1field = this.page.locator("#AccountFrm_address_1");
    this.cityField = this.page.locator("#AccountFrm_city");
    this.regionFieldDropdown = this.page.locator("#AccountFrm_zone_id");
    this.zipCodeField = this.page.locator("#AccountFrm_postcode");
    this.countryFieldDropdown = this.page.locator("#AccountFrm_country_id");
    this.loginNameField = this.page.locator("#AccountFrm_loginname");
    this.passwordField = this.page.locator("#AccountFrm_password");
    this.passwordConfirmField = this.page.locator("#AccountFrm_confirm");
    this.privacyPolicyCheckbox = this.page.locator("#AccountFrm_agree");
    this.registerButton = this.page.getByRole("button", { name: " Continue" });
  }

  async fillRegistrationForm(data: {
    firstName: string;
    lastName: string;
    email: string;
    address1: string;
    city: string;
    country: string;
    region: string;
    zipCode: string;
    loginName: string;
    password: string;
    passwordConfirm: string;
  }): Promise<void> {
    await this.firstNameField.fill(data.firstName);
    await this.lastNameField.fill(data.lastName);
    await this.emailField.fill(data.email);
    await this.address1field.fill(data.address1);
    await this.cityField.fill(data.city);
    await this.countryFieldDropdown.selectOption(data.country);
    await this.regionFieldDropdown.selectOption(data.region);
    await this.zipCodeField.fill(data.zipCode);
    await this.loginNameField.fill(data.loginName);
    await this.passwordField.fill(data.password);
    await this.passwordConfirmField.fill(data.passwordConfirm);
    await this.privacyPolicyCheckbox.click();
    await expect(this.firstNameField).toHaveValue(data.firstName);
    await expect(this.lastNameField).toHaveValue(data.lastName);
    await expect(this.emailField).toHaveValue(data.email);
    await expect(this.address1field).toHaveValue(data.address1);
    await expect(this.cityField).toHaveValue(data.city);
    await expect(this.regionFieldDropdown).toHaveValue(data.region);
    await expect(this.countryFieldDropdown).toHaveValue(data.country);
    await expect(this.passwordConfirmField).toHaveValue(data.password);
    await this.registerButton.click();
  }
}
