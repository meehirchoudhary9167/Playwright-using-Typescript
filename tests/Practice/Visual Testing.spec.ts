
import { test, expect } from "@playwright/test";

test('Visual testing of login form - Full page', async ({ page }) => {

    // Open the practice page
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Open the login form
    await page.getByRole('button', { name: 'Login / Signup' }).click();

    // Compare the entire page before entering email
    await expect(page).toHaveScreenshot('login-empty.png');

    // Enter an email address
    await page.locator('#loginEmail').fill('john@example.com');

    // Compare the entire page after entering email
    await expect(page).toHaveScreenshot('login-filled.png');
});


test('Element visual testing of login form', async ({ page }) => {

    // Open the practice page
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Open the login form
    await page.getByRole('button', { name: 'Login / Signup' }).click();

    // Locate the login form using its CSS classes
    const element = page.locator(
        '.bg-slate-800'
    ).first();

    // Compare only the login form before entering email
    await expect(element).toHaveScreenshot('login_form_empty.png');

    // Enter an email address
    await page.locator('#loginEmail').fill('john@example.com');

    // Compare only the login form after entering email
    await expect(element).toHaveScreenshot('login_form_filled.png');

});