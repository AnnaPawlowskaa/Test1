import { test, expect } from "@playwright/test";
import "dotenv/config";
import { urls } from '../helpers/data' ;


test("basics", async ({ page }) => {
  await test.step("open checkboxes page", async () => {
    await page.goto(urls.herokuappURL + "/checkboxes");
    const classExample = page.locator(".example");
    await expect(classExample).toBeVisible();
    await expect(classExample).toContainText("Checkboxes");
  });
  await test.step("Assert first checkbox and check it", async () => {
    const checkbox1 = page.getByRole("checkbox").first();
    await expect(checkbox1).not.toBeChecked();
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
  });

  await test.step("Assert second checbox", async () => {
    const checkbox2 = page.getByRole("checkbox").nth(1);
    await expect(checkbox2).toBeChecked();
  });
});

test("Basic test for fill inputs", async ({ page }) => {
  await test.step("open login page", async () => {
    await page.goto(urls.herokuappURL + "/login");
    const classExample = page.locator(".example");
    await expect(classExample).toBeVisible();
    await expect(classExample).toContainText(
      "This is where you can log into the secure area. Enter"
    );
  });
  await test.step("fill login inputs", async () => {
    const userNameInput = page.locator("#username");
    await userNameInput.fill(process.env.USER_1 as string);
    await expect(userNameInput).toHaveValue(process.env.USER_1 as string);
  });

  await test.step("fill password inputs", async () => {
    const passwordInput = page.locator("#password");
    await passwordInput.fill(process.env.PASSWORD as string);
    await expect(passwordInput).toHaveValue(process.env.PASSWORD as string);
  });

  await test.step("click login button", async () => {
    const loginButton = page.locator(".radius");
    await loginButton.click();
  });

  await test.step("Ensure if user is logged", async () => {
    const confirmationMessage = page.locator("#flash");
    await expect(confirmationMessage).toContainText(
      "You logged into a secure area!"
    );
  });
});

test("basic test for dropdown", async ({ page }) => {
  await test.step("go to dropdown page", async () => {
    await page.goto(urls.herokuappURL + "/dropdown");
    const header = page.getByRole("heading");
    await expect(header).toContainText("Dropdown List");
  });

  await test.step("select an option", async () => {
    const selectedValue = page.locator("#dropdown");
    await expect(selectedValue).toContainText("Please select an option");
  });

  await test.step("select an option", async () => {
    const selectedValue = page.locator("#dropdown");
    await selectedValue.selectOption("1");
    await expect(selectedValue).toContainText("Option 1");
  });
});
