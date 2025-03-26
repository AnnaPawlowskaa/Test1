import { test } from "../fixtures/base";
import { data } from "../helpers/data";

test.skip("registration test", async ({
  mainPage,
  loginOrRegisterPage,
  registerPage,
}) => {
  await test.step("go to registration page", async () => {
    await mainPage.openMainPage();
    await mainPage.openLoginOrRegister();
    await loginOrRegisterPage.openRegistrationForm();
  });
  await test.step("register new user", async () => {
    await registerPage.fillRegistrationForm(data);
  });
});

test("login test", async ({ mainPage, loginOrRegisterPage }) => {
  await mainPage.openMainPage();
  await mainPage.openLoginOrRegister();
  await loginOrRegisterPage.fillLoginInputs();
  await loginOrRegisterPage.clickLoginButton();
});

test("go to T-shirt page", async ({ mainPage }) => {
  await mainPage.openMainPage();
  await mainPage.goToTshirtPage();
});
