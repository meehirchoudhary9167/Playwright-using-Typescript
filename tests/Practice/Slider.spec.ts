import { test, expect } from "@playwright/test";

test("Test Range Slider", async ({ page }) => {

    // Open application
await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );
    // Locate slider
    const slider = page.locator("#testSlider");

    // Set slider value to 80
    await slider.fill("80");

    // Verify slider value
    await expect(slider).toHaveValue("80");

    // Verify displayed value
    await expect(page.locator("#rangeValue"))
        .toHaveText("80");
 
    // Clicking Multiple Time
    await page.locator("#incrementBtn").click({ clickCount: 5 });

    await expect(page.locator("#clickCountDisplay"))
        .toHaveText("5");
});