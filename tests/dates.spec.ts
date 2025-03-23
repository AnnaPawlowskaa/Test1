import { test, expect } from '@playwright/test';
import dayjs from "dayjs";

test("dates", async ({ page }) => {
    const today = dayjs();
    let plus7days = today.add(7, "day").format("DD-MM-YYYY")

    console.log(plus7days)
})