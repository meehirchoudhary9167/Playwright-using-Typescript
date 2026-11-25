import { test, expect } from "@playwright/test";

test('Login using Playwright', async ({ page }) => {

await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );    // Login
    await page.getByRole('button', { name: 'Login / Signup' }).click();

    await page.locator('#loginEmail').fill('john@example.com');

    await page.locator('#loginPassword').fill('Meehir@123');

    await page.locator('#authSubmitBtn').click();

    await expect( page.getByText('Master Your Automation Skills Here')).toBeVisible();
});