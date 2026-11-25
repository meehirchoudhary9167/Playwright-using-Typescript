
import { test, expect } from "@playwright/test";

// Test case: Verify that a user can log in successfully
test("Login using Playwright", async ({ page }) => {

    // Open the local HTML practice page in the browser.
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Click the "Login / Signup" button to open the login form.
    await page.getByRole("button", {
        name: "Login / Signup"
    }).click();

    // Enter the user's email address into the email input field.
    await page.locator("#loginEmail").fill("john@example.com");

    // Enter the user's password into the password input field.
    await page.locator("#loginPassword").fill("Meehir@123");

    // Click the Login/Submit button to submit the login form.
    await page.locator("#authSubmitBtn").click();

    // Verify that the main page heading is visible after successful login.
    // This confirms that the login operation was successful.
    await expect(
        page.getByText("Master Your Automation Skills Here")
    ).toBeVisible();
});

//# Run only the "Login using Playwright" test 5 times.
// # Useful for checking whether the login test is stable or flaky.
// npx playwright test --grep "Login using Playwright" --repeat-each=5

// # Run all Playwright tests 5 times each.
// # Every test in the project will be executed 5 times.
// npx playwright test --repeat-each=5