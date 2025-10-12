import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { urls } from '../helpers/data';

const authFile = path.join(__dirname, "../.auth/user.json");
const {automationTestStoreURL} = urls;

setup("auth setup", async ({ page }) => {
  await page.goto(automationTestStoreURL);
  await page.getByRole("link", { name: "Login or register" }).click();
  await page.locator("#loginFrm_loginname").click();
  await page.locator("#loginFrm_loginname").fill(process.env.USER2 as string);
  await page.locator("#loginFrm_password").click();
  await page.locator("#loginFrm_password").fill(process.env.PASSWORD2 as string);
  await page.getByRole("button", { name: " Login" }).click();

  await page.context().storageState({ path: authFile });
});