import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.vouchercodes.co.uk/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByTestId('el:searchInput').click();
  await page.getByLabel('', { exact: true }).fill('restaurants');
  await page.getByLabel('', { exact: true }).press('Enter');
  await page.getByPlaceholder('Town or postcode').click();
  // await page.getByPlaceholder('Town or postcode').fill('London');
  // await page.getByPlaceholder('Town or postcode').press('Tab');
  // await page.locator('select[name="day-select"]').press('Tab');
  // await page.getByRole('button', { name: 'Find restaurants vouchers' }).click();
});