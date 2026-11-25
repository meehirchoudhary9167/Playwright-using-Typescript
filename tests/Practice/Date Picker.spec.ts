import { test, expect } from "@playwright/test";

// Test case: Verify keyboard actions using Playwright
test("Date Picker Action in Playwright", async ({ page }) => {

    // Open the local HTML practice page
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    await page.locator('#dob').click();
    await page.locator('#dob').fill("2021-12-12");
});