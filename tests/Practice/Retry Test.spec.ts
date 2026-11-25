import {test,expect} from "@playwright/test";

test('Retry Test in Playwright', async({page})=>{

   // Open the local HTML practice page in the browser.
    await page.goto(
        "file:///C:/Users/Meehir/Downloads/automation_practice_playground.html"
    );

    await expect(page.getByRole("heading",{name:'Master Your Automation Skills Here'})).toHaveText('Master Your Automation Skills Here');
});