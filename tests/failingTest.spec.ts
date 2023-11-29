import { test, expect } from "@playwright/test";

test("search for restaurant vouchers and asserting for a condition that will not exist", async ({
  page,
}) => {
  await page.goto("https://www.vouchercodes.co.uk/restaurant-vouchers.html/");
  await page.getByRole("button", { name: "OK" }).click();

  await page.getByPlaceholder("Town or postcode").click();
  await page.getByPlaceholder("Town or postcode").fill("Londo");
  await page.getByText('London', { exact: true }).first().click();
  await page.locator('select[name="day-select"]').selectOption("Any");
  await page.getByRole("button", { name: "Find restaurants vouchers" }).click();
// This assert will fail as the URL is not the home page.
  await expect(page).toHaveURL("https://www.vouchercodes.co.uk/");
});
