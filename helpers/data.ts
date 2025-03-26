import 'dotenv/config'

export const data = {
  firstName: "Regina",
  lastName: "Phalangie",
  email: "regina.p@gmail.com",
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

export const userId = "e6d950e8-415f-4ec8-97b3-2082f0196920";
export const ISBN = '9781593275846'
