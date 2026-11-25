import { test, expect } from "@playwright/test";

// Test case: Verify hard assertions and element/page validations in Playwright
test("Hard Assertions Action in Playwright", async ({ page }) => {

    // Open the local HTML practice page in the browser
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Locate the search input using its placeholder text
    const searchBox = page.getByPlaceholder(
        "Search forms, tables, widgets...",
        { exact: true }
    );

    // Verify that the search box is visible on the page
    await expect(searchBox).toBeVisible();

    // Verify that the search box allows the user to enter text
    await expect(searchBox).toBeEditable();

    // Verify that the search box is enabled and can be interacted with
    await expect(searchBox).toBeEnabled();

    // Verify that the search box is initially empty
    await expect(searchBox).toBeEmpty();


    // Click on the search box
    await searchBox.click();

    // Enter "Forms, Inputs & Selections" into the search box
    await searchBox.fill("Forms, Inputs & Selections");

    // Press the Enter key to perform the search
    await searchBox.press("Enter");


    // Verify that the current page URL is correct
    await expect(page).toHaveURL(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Verify that the page title is correct
    await expect(page).toHaveTitle(
        "Automation Practice Playground"
    );

    // Locate the main heading using its accessible role and name
    const mainHeading = page.getByRole(
        "heading",
        { name: "Master Your Automation Skills Here" }
    );

    // Verify that the main heading contains the expected text
    await expect(mainHeading).toHaveText(
        "Master Your Automation Skills Here"
    );
});