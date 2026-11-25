import {test, expect} from "@playwright/test";

test("Record at cursor Test",async({page})=>{

   await page.goto("https://www.google.com/");

   await page.getByRole('combobox', { name: 'Search' }).fill("Playwright by Tester Talk");
   await page.getByRole('combobox', { name: 'Search' }).press('Enter');
   await page.getByRole('link', { name: 'Playwright by Testers Talk ' }).first().click();
   await expect(page).toHaveTitle('Playwright by Tester Talks');
   await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
   await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
   await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
   await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
});