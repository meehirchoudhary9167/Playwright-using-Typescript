
import { test, expect } from "@playwright/test";

// Test 1: Handle a JavaScript Alert
test('Handling Alert in Playwright', async ({ page }) => {

    // Open the practice HTML page
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Register a listener before clicking the button
    page.once("dialog", async (dialog) => {

        // Print the alert message in the terminal
        console.log(`Alert Text: ${dialog.message()}`);

        // Accept the alert by clicking OK
        await dialog.accept();
    });

    // Click the button that triggers the JavaScript alert
    await page.getByRole("button", { name: "Show Alert" }).click();
});


// Test 2: Handle a JavaScript Confirm Dialog
test('Handling Confirm Popup in Playwright', async ({ page }) => {

    // Open the practice HTML page
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Register a listener before clicking the button
    page.once("dialog", async (dialog) => {

        // Print the confirm dialog message before closing it
        console.log(`Confirm Text: ${dialog.message()}`);

        // Dismiss the confirm dialog by clicking Cancel
        await dialog.dismiss();
    });

    // Click the button that triggers the JavaScript confirm dialog
    await page.getByRole("button", { name: "Show Confirm" }).click();
});


// Test 3: Handle a JavaScript Prompt Dialog
test('Handling Prompt Popup in Playwright', async ({ page }) => {

    // Open the practice HTML page
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Register a listener before clicking the button
    page.once("dialog", async (dialog) => {

        // Print the prompt message in the terminal
        console.log(`Prompt Text: ${dialog.message()}`);

        // Enter text into the prompt and click OK
        await dialog.accept("Meehir Choudhary");
    });

    // Click the button that triggers the JavaScript prompt
    await page.getByRole("button", { name: "Show Prompt" }).click();
});