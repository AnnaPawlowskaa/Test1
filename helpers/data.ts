import 'dotenv/config'

export const data = {
  firstName: "Regina",
  lastName: "Phalangie",
  email: "regina.p2@gmail.com",
  address1: "48th Av",
  city: "NYC",
  region: "3655",
  zipCode: "07008",
  country: "223",
  loginName: process.env.USER2 as string,
  password: process.env.PASSWORD2 as string,
  passwordConfirm: process.env.PASSWORD2 as string,
};

export const urls = {
  automationTestStoreURL: "https://automationteststore.com",
  herokuappURL: "https://the-internet.herokuapp.com",
  api: "https://demoqa.com"
};

export const userId = "3cb4e26f-0093-49ad-8e95-eb46f73c3124";
export const ISBN = '9781593275846'
