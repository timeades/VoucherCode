import { test, expect } from '@playwright/test';

test('search for restaurant vouchers in the town', async ({ page }) => {
  await page.goto('https://www.vouchercodes.co.uk/restaurant-vouchers.html/');
  await page.getByRole('button', { name: 'OK' }).click(); // To dismiss the pop up

  
  await page.getByPlaceholder('Town or postcode').click();
  await page.getByPlaceholder('Town or postcode').fill('Londo');
  await page.getByText('London', { exact: true }).click();
  await page.getByRole('button', { name: 'Find restaurants vouchers' }).click();
  await expect(page).toHaveTitle(/Restaurant Vouchers, Codes & Offers for November 2023/);
  await page.getByText('Get Voucher', { exact: true });
});

test('search for restaurant vouchers, none are available returned', async ({ page }) => {
  await page.goto('https://www.vouchercodes.co.uk/restaurant-vouchers.html/');
  await page.getByRole('button', { name: 'OK' }).click();

 
  await page.getByPlaceholder('Town or postcode').click();
  await page.getByPlaceholder('Town or postcode').fill('Londo');
  await page.getByText('London', { exact: true }).first().click();
  await page.locator('select[name="day-select"]').selectOption('2023-11-30');
  await page.getByRole('button', { name: 'Find restaurants vouchers' }).click();
  await page.getByText('Sorry, we don\'t have any offers available from your favourite restaurants at the moment.', { exact: true });
});
