import { test as base } from "@playwright/test";

import { MainPage } from "../pages/main.page";
import { LoginOrRegisterPage } from "../pages/loginOrRegister.page"
import { RegisterPage } from '../pages/register.page';

type Fixtures = {

    mainPage: MainPage;
    loginOrRegisterPage: LoginOrRegisterPage;
    registerPage: RegisterPage;
};

export const test = base.extend<Fixtures>({

    
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
    },
  
    loginOrRegisterPage: async ({ page }, use) => {
        await use(new LoginOrRegisterPage(page));
    },
    
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    }
});