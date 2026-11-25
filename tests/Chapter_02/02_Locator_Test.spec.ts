import {test, expect} from "@playwright/test";

test("Locator in Playwright",async({page})=>{

   await page.goto("https://in.pinterest.com/");

   //ByRole
   //await page.getByRole('button',{name:'Log in'}).click();

   //ByLabel
   //await page.getByLabel('Pinterest logo',{exact:true}).click();

   //By Alt
   //await page.getByAltText('Halloween trends').click();

   //By id
   await page.getByTestId('search-box-container').click();

});
