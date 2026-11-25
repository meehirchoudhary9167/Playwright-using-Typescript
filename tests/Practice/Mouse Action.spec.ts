import { test, expect } from "@playwright/test";

test("Mouse Action in Playwright", async ({ page }) => {

    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    // ==========================================
    // LOCATOR-BASED MOUSE ACTIONS
    // ==========================================

    // 1. Left Click
    await page.locator("#navLoginBtn").click();

    // 2. Double Click
    await page.locator("#navLoginBtn").dblclick();

    // 3. Right Click
    await page.locator("#navLoginBtn").click({
        button: "right"
    });

    // 4. Middle Click
    await page.locator("#navLoginBtn").click({
        button: "middle"
    });

    // 5. Mouse Hover
    await page.locator("#navLoginBtn").hover();


    // ==========================================
    // PAGE.MOUSE ACTIONS
    // ==========================================

    // 6. Move Mouse
    await page.mouse.move(500, 300);

    // 7. Mouse Left Click
    await page.mouse.click(500, 300);

    // 8. Mouse Double Click
    await page.mouse.dblclick(500, 300);

    // 9. Mouse Press
    await page.mouse.down();

    // 10. Mouse Move while holding mouse button
    await page.mouse.move(700, 300);

    // 11. Mouse Release
    await page.mouse.up();

});

