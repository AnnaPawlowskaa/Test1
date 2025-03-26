import { test, expect, request } from "@playwright/test";
import { urls, userId, ISBN } from "../helpers/data";
import "dotenv/config";

test.describe.configure({ mode: "serial" });
let token: string;

test.beforeAll("generate token", async ({ request }) => {
  const response = await request.post(urls.api + "/Account/v1/GenerateToken", {
    data: {
      userName: process.env.USER_API,
      password: process.env.PASSWORD_API,
    },
  });

  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  token = responseBody.token;
});

test.skip("GET api all", async ({ request }) => {
  const response = await request.get(urls.api + "/Books/v1/Books");
  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status()).toBe(200);
  expect(responseBody.books[0].title).toContain("Git Pocket Guide");
  const jsonString = JSON.stringify(responseBody);
  expect(jsonString.includes("Git Pocket Guide")).toBe(true);
});

test.skip("create a user", async ({ request }) => {
  const response = await request.post(urls.api + "/Account/v1/User", {
    data: {
      userName: process.env.USER_API,
      password: process.env.PASSWORD_API,
    },
  });
  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status()).toBe(201);
});

test("authorize", async ({ request }) => {
  const response = await request.post(urls.api + "/Account/v1/Authorized", {
    data: {
      userName: process.env.USER_API,
      password: process.env.PASSWORD_API,
    },
  });
  const responseBody = response.json();
  expect(response.status()).toBe(200);
});

test("Add books", async ({ request }) => {
  const response = await request.post(`${urls.api}/BookStore/v1/Books`, {
    headers: {
      Authorization: "Bearer " + token,
    },
    data: {
      userId: userId,
      collectionOfIsbns: [
        {
          isbn: "9781449325862",
        },
        {
          isbn: "9781449331818",
        },
        {
          isbn: "9781449337711",
        },
      ],
    },
  });
  const responseBody = response.json();
  console.log("123", JSON.stringify(responseBody));
  expect(response.status()).toBe(201);
});

test("Get user", async ({ request }) => {
  const response = await request.get(`${urls.api}/Account/v1/User/${userId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  console.log("response", responseBody);
});

test("change books in the cart", async ({ request }) => {
  const response = await request.put(`${urls.api}/BookStore/v1/Books/9781593277574`, {
    headers: {
      Authorization: "Bearer " + token,
    },
    data: {
      userId: userId,
      isbn: ISBN,
    },
  });
  const responseBody = response.json();
  expect(response.status()).toBe(200);
  console.log("put test", responseBody);
});

test.skip("delete books", async ({ request }) => {
  const response = await request.delete(`${urls.api}/BookStore/v1/Books`, {
    headers: {
      Authorization: "Bearer " + token,
    },
    params: {
      UserId: userId,
    },
  });
  expect(response.status()).toBe(204);
});

test("Get user2", async ({ request }) => {
  const response = await request.get(`${urls.api}/Account/v1/User/${userId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
//   expect(responseBody.books.length).toBeFalsy();
  console.log("response", responseBody, "expect", responseBody.books.length);
});
