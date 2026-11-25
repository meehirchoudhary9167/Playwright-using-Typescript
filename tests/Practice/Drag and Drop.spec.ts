import {test,expect} from "@playwright/test";

test('Drag and Drop in Playwright', async({page})=>{
  
await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );
     // Drag item to drop zone
    await page.locator("#dragItem1")
        .dragTo(page.locator("#dropZone"));

    // Take screenshot after drag and drop
    await page.screenshot({
        path: "./screenshot/Drag_Drop.png"
    });
});