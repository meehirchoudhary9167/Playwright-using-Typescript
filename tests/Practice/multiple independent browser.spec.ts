import { test, expect } from "@playwright/test";

test("Create multiple independent browser sessions", async ({ browser }) => {

    // Create the first independent browser session
    const context1 = await browser.newContext();

    // Create a page for Student A
    const page1 = await context1.newPage();

    // Open the practice page in Student A's session
    await page1.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Create a second independent browser session
    const context2 = await browser.newContext();

    // Create a page for Student B
    const page2 = await context2.newPage();

    // Open the practice page in Student B's session
    await page2.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // Print the number of pages in each session
    console.log("Student A pages:", context1.pages().length);
    console.log("Student B pages:", context2.pages().length);

    // Close Student A's browser session
    await context1.close();

    // Close Student B's browser session
    await context2.close();
});
