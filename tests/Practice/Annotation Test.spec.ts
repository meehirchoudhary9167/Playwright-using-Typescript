import { test, expect } from "@playwright/test";

// Normal Playwright test.
// This test will be executed when we run the test file.
test("Annotation 1 in Playwright", async ({ page }) => {

    // Open the local HTML practice page in the browser.
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Locate the "+ Add New Row" button using its accessible role and name.
    // Click the button to open the form for adding a new employee record.
    await page.getByRole("button", { name: "+ Add New Row" }).click();
});


// test.skip() is used to skip a test.
// Playwright will identify this test as "Skipped" and will not execute it.
test.skip("Annotation 2 in Playwright", async ({ page }) => {

    // Open the local HTML practice page in the browser.
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Click the "+ Add New Row" button to open the new employee form.
    await page.getByRole("button", { name: "+ Add New Row" }).click();

    // Enter the employee's name into the Name input field.
    await page.locator("#newEmpName").fill("Meehir Choudhary");

    // Enter the employee's job role into the Role input field.
    await page.locator("#newEmpRole").fill("QA Engineer");

    // Enter the employee's department into the Department input field.
    await page.locator("#newEmpDept").fill("Technical");

    // Click the "Add Record" button to submit the new employee details.
    await page.getByRole("button", { name: "Add Record" }).click();
});


// test.only() tells Playwright to execute ONLY this test.
// Other tests in the same test file will not be executed.
test.only("Annotation 3 in Playwright", async ({ page }) => {

    // Open the local HTML practice page in the browser.
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Locate the "+ Add New Row" button and click it.
    // This opens the form used to add a new employee record.
    await page.getByRole("button", { name: "+ Add New Row" }).click();
});

