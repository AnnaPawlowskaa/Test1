import { test } from "@playwright/test";
import { dbConnect } from "../helpers/db";

test("DB connection test", async () => {
  await dbConnect();
});