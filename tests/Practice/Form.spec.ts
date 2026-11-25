import { test, expect } from "@playwright/test";

test("Form Testing using Playwright", async ({ page }) => {

    // 1. Open the application
await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );
    // 2. Enter First Name
    await page.locator("#firstName").fill("Meehir");

    // 3. Enter Email
    await page.locator("#userEmail").fill("john@example.com");

    // 4. Select Country from dropdown
    await page.locator("#countrySelect").selectOption("ind");

    // Verify Country
    await expect(page.locator("#countrySelect"))
        .toHaveValue("ind");

    // 5. Select Male radio button
    await page.locator(
        'input[name="gender"][value="male"]'
    ).check();

    // Verify Male is selected
    await expect(
        page.locator('input[name="gender"][value="male"]')
    ).toBeChecked();

    // 6. Select Coding checkbox
    await page.locator(
        'input[name="hobbies"][value="coding"]'
    ).check();

    // Verify Coding checkbox is selected
    await expect(
        page.locator('input[name="hobbies"][value="coding"]')
    ).toBeChecked();

    // 7. Enter Date of Birth
    await page.locator("#dob").fill("2002-11-01");

    // Verify Date of Birth
    await expect(page.locator("#dob"))
        .toHaveValue("2002-11-01");

    // 8. Submit the form
    await page.getByRole("button", {
        name: "Submit Form"
    }).click();

});