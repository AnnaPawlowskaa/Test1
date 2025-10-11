import { test, expect } from "@playwright/test";
import path from "path";

test("File download", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");
    const downloadPromise = page.waitForEvent('download');
    await page.getByText("smit.txt").click();
    const download = await downloadPromise;

const helpersDir = path.join(process.cwd(), 'helpers');
    const filePath = path.join(helpersDir, await download.suggestedFilename());
    await download.saveAs(filePath);
})