import {test, expect} from "@playwright/test";

test("My First Playwright Test",async({page})=>{

   await page.goto("https://www.google.com/");

   await page.getByRole('combobox', { name: 'Search' }).fill("Playwright by Tester Talk");
   await page.getByRole('combobox', { name: 'Search' }).press('Enter');
   await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
   await expect(page).toHaveTitle('Playwright by Tester Talks');
});