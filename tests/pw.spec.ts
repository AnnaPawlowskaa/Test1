import { test } from "../fixtures/base";
import { data } from "../helpers/data";

test("test", async ({
  mainPage,
  loginPage,
  loginOrRegisterPage,
  registerPage,
}) => {
  await test.step("go to registration page", async () => {
    await mainPage.openMainPage();
    await mainPage.openLoginOrRegister();
    await loginOrRegisterPage.openRegistrationForm();
  });
  await test.step("register new user", async () => {
    await registerPage.fillRegistrationForm(
      data.firstNameField,
      data.lastNameField,
      data.emailField,
      data.address1field,
      data.cityField,
      data.countryFieldDropdown,
      data.regionFieldDropdown,
      data.loginName,
      data.password,
      data.passwordConfirm
    );
  });
});
