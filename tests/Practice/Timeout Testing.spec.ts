import { test, expect } from "@playwright/test";

// TEST TIMEOUT: Maximum time allowed for one individual test to complete.
// Default: 30 seconds.
test.setTimeout(60000);

// GLOBAL TIMEOUT: Maximum time allowed for the entire test run to complete.
// Default: No limit. Configure globalTimeout in playwright.config.ts.

test("Playwright Timeout Examples", async ({ page }) => {

    // Open the practice HTML page
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // ACTION TIMEOUT: Maximum time Playwright waits for a specific browser
    // action, such as click() or fill(), to complete.
    // Default: No separate action-specific limit.
    await page.getByRole(
        "button",
        { name: "Login / Signup" }
    ).click({ timeout: 10000 });

    // ASSERTION TIMEOUT: Maximum time Playwright waits for an
    // auto-retrying assertion's expected condition to become true.
    // Default: 5 seconds.
    await expect(
        page.locator("#loginEmail")
    ).toBeVisible({ timeout: 10000 });

    // Fill the email field
    await page.locator("#loginEmail").fill("john@example.com");

    // Verify the email field contains the expected value
    await expect(
        page.locator("#loginEmail")
    ).toHaveValue("john@example.com");

});
