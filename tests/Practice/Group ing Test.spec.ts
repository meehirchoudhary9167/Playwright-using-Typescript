import { test, expect } from "@playwright/test";

// Create a group for all related Playwright tests.
// All tests written inside this block belong to the same test group.
test.describe("Employee Management Tests", () => {

    // Test 1: Verify that the "Add New Row" button can be clicked.
    test("Test 1 in Playwright", async ({ page }) => {

        // Open the local HTML practice page in the browser.
        await page.goto(
            "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
        );

        // Locate the "+ Add New Row" button using its role and accessible name.
        // Click the button to open the employee form.
        await page.getByRole("button", {
            name: "+ Add New Row"
        }).click();
    });


    // Test 2: Add a new employee record.
    test("Test 2 in Playwright", async ({ page }) => {

        // Open the local HTML practice page in the browser.
        await page.goto(
            "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
        );

        // Click the "+ Add New Row" button to open the employee form.
        await page.getByRole("button", {
            name: "+ Add New Row"
        }).click();

        // Enter the employee's name.
        await page.locator("#newEmpName").fill("Meehir Choudhary");

        // Enter the employee's job role.
        await page.locator("#newEmpRole").fill("QA Engineer");

        // Enter the employee's department.
        await page.locator("#newEmpDept").fill("Technical");

        // Click "Add Record" to submit the employee details.
        await page.getByRole("button", {
            name: "Add Record"
        }).click();
    });


    // Test 3: Verify that the "Add New Row" button opens the form.
    test("Test 3 in Playwright", async ({ page }) => {

        // Open the local HTML practice page in the browser.
        await page.goto(
            "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
        );

        // Click the "+ Add New Row" button.
        await page.getByRole("button", {
            name: "+ Add New Row"
        }).click();
    });

});
