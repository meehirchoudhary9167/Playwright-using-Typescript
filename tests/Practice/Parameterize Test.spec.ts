
import { test, expect } from "@playwright/test";

// Store multiple sets of login test data
const creds = [
    {
        email: "john@example.com",
        password: "Meehir@123",
        expected: "Success"
    },
    {
        email: "john@example.com",
        password: "Meehr@123",
        expected: "Invalid"
    }
];

// Run a separate test for each set of credentials
for (const data of creds) {

    test(`Login using Parameterization - ${data.email} (${data.expected})`, async ({ page }) => {

        // Open the practice webpage
        await page.goto(
            "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
        );

        // Open the login form
        await page.getByRole('button', { name: 'Login / Signup' }).click();

        // Enter email and password from the current data object
        await page.locator('#loginEmail').fill(data.email);
        await page.locator('#loginPassword').fill(data.password);

        // Submit the login form
        await page.locator('#authSubmitBtn').click();

        // Verify the expected result
        if (data.expected === "Success") {
            await expect(
                page.getByText('Master Your Automation Skills Here')
            ).toBeVisible();
        } else if (data.expected === "Invalid") {
            // Replace this with the actual error message in your webpage
            await expect(
                page.locator('#loginPassword')
            ).toBeVisible();
        }
    });
}