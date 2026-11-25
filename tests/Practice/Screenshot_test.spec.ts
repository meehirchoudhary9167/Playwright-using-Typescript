import {test, expect} from "@playwright/test";

test("Screenshot Test",async({page})=>{

   await page.goto("https://in.pinterest.com/");

   //Element Screenshot
    await page.locator('.ADXRXN.qJUqe1.sSBu24.zEVE_X').first().screenshot({path:"./screenshot/Element_screenshot.png"});

   //page Screenshot
    await page.screenshot({path:"./screenshot/Page_screenshot.png"});

    //fullpage screenshot
    await page.screenshot({path:"./screenshot/FullPage_screenshot.png", fullPage:true});

});