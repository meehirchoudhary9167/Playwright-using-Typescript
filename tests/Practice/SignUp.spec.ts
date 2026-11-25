import { test, expect } from "@playwright/test";

test('Sign Up using Playwright', async ({ page }) => {

await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );    // Sign up
    await page.getByRole('button', { name: 'Login / Signup' }).click();

    await page.locator('#signupTabBtn').click();

    await page.locator('#signupName').fill('Meehir Choudhary');

    await page.getByPlaceholder('john@example.com').fill('john@example.com');

    await page.locator('#signupPassword').fill('Meehir@123');

    await page.getByText('Create Account').click();

    await expect(
    page.getByText('Account registered successfully! Please login.')
).toBeVisible();
});