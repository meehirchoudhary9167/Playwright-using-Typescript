import { test, expect } from "@playwright/test";

test("Open multiple tabs in one browser session", async ({ browser }) => {

    // Create one isolated browser context
    const context = await browser.newContext();

    // Create the first browser tab
    const page1 = await context.newPage();

    // Open the practice HTML page in the first tab
    await page1.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Create the second browser tab in the SAME context
    const page2 = await context.newPage();

    // Open the practice HTML page in the second tab
    await page2.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Verify that both tabs have loaded
    await expect(page1).toHaveTitle(/.*/);
    await expect(page2).toHaveTitle(/.*/);

    // Print the number of open tabs in this context
    console.log("Open tabs:", context.pages().length);

    // Close the first tab
    await page1.close();

    // Close the second tab
    await page2.close();

    // Close the browser context
    await context.close();
});

