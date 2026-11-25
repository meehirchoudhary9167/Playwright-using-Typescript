import { test, expect } from "@playwright/test";

// Test case: Verify soft assertions and element/page validations in Playwright
test("Soft Assertions Action in Playwright", async ({ page }) => {

    // Open the local HTML practice page in the browser
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Locate the search input using its placeholder text
    const searchBox = page.getByPlaceholder(
        "Search forms, tables, widgets...",
        { exact: true }
    );

    // Soft assertion: Verify that the search box is visible
    // If this fails, the test will continue executing
    await expect.soft(searchBox).toBeVisible();

    // Soft assertion: Verify that the search box is editable
    await expect.soft(searchBox).toBeEditable();

    // Soft assertion: Verify that the search box is enabled
    await expect.soft(searchBox).toBeEnabled();

    // Soft assertion: Verify that the search box is initially empty
    await expect.soft(searchBox).toBeEmpty();

    // Click on the search box
    await searchBox.click();

    // Enter "Forms, Inputs & Selections" into the search box
    await searchBox.fill("Forms, Inputs & Selections");

    // Press the Enter key to perform the search
    await searchBox.press("Enter");

    // Soft assertion: Verify that the current page URL is correct
    await expect.soft(page).toHaveURL(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Soft assertion: Verify that the page title is correct
    await expect.soft(page).toHaveTitle(
        "Automation Practice Playground"
    );

    // Locate the main heading using its accessible role and name
    const mainHeading = page.getByRole(
        "heading",
        { name: "Master Your Automation Skills Here" }
    );

    // Soft assertion: Verify that the main heading contains the expected text
    await expect.soft(mainHeading).toHaveText(
        "Master Your Automation Skills Here"
    );
});
