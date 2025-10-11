import { defineConfig, devices } from "@playwright/test";
import { urls } from "./helpers/data";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 10000,
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    viewport: { width: 1920, height: 1080 },
  },

  projects: [
    {
      name: "dev",
      use: {
        baseURL: urls.herokuappURL,
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "store",
      use: {
        baseURL: urls.automationTestStoreURL,
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "no.browser",
    },
    {
      name: "chrome",
      use: {
        baseURL: urls.herokuappURL,
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
