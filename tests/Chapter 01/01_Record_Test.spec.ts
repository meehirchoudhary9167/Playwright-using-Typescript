import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await test.step("Navigating to URL", async () => {
    await page.goto("https://github.com/");
    await page.getByRole("link", { name: "Sign in" }).click();
  });
  await test.step("Enter username and Password", async () => {
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .fill("Test");
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .press("CapsLock");
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .fill("TestU");
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .press("CapsLock");
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .fill("TestUser1");
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("Tesst@123");
  });
  await test.step("Click on sign in button", async () => {
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
  });
  await test.step("Displaying Error Message", async () => {
    await expect(page.getByRole("alert")).toContainText(
      "Incorrect username or password.",
    );
  });
});
