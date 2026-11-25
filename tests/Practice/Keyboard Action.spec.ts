import { test, expect } from "@playwright/test";

// Test case: Verify keyboard actions using Playwright
test("Keyboard Action in Playwright", async ({ page }) => {

    // Open the local HTML practice page
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Locate the table search input field and click on it
    await page.locator('#tableSearch').click();

    // Enter "Bob" into the search field
    await page.locator('#tableSearch').fill('Bob');

    // Press the Enter key to perform the search
    await page.locator('#tableSearch').press('Enter');

    // Click on the search field again
    await page.locator('#tableSearch').click();

    // Press Ctrl + A to select all text inside the search field
    await page.keyboard.press('Control+A');

    // Press Delete to remove the selected text
    await page.keyboard.press("Delete");
});
