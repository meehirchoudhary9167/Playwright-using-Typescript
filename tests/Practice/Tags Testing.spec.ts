import { test, expect } from "@playwright/test";

// @smoke tag marks this test as an important test
// that can be executed as part of the smoke test suite.
test(
    "Test 1 in Playwright",
    {
        tag: "@smoke"
    },
    async ({ page }) => {

        // Open the local HTML practice page in the browser.
        await page.goto(
            "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
        );

        // Locate the "+ Add New Row" button using its role and accessible name.
        // Click the button to open the employee form.
        await page.getByRole("button", {
            name: "+ Add New Row"
        }).click();
    }
);


// @smoke and @regression tags are assigned to this test.
// This test can be executed as part of both test suites.
test(
    "Test 2 in Playwright",
    {
        tag: ["@smoke", "@regression"]
    },
    async ({ page }) => {

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

        // Click the "Add Record" button to submit the employee details.
        await page.getByRole("button", {
            name: "Add Record"
        }).click();
    }
);


// @regression tag marks this test as part of the regression test suite.
// This test will run when we execute tests using the @regression tag.
test(
    "Test 3 in Playwright",
    {
        tag: "@regression"
    },
    async ({ page }) => {

        // Open the local HTML practice page in the browser.
        await page.goto(
            "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
        );

        // Locate and click the "+ Add New Row" button.
        // This opens the form used to add a new employee record.
        await page.getByRole("button", {
            name: "+ Add New Row"
        }).click();
    }
);

//npx playwright test --grep @smoke
//npx playwright test --grep @regression