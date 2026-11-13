import { expect, test } from '@playwright/test';

test('shows a login error, then accepts the demo account', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Email address').fill('demo@example.com');
  await page.getByLabel('Password').fill('wrong-password');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('status')).toHaveText(
    'Email or password is incorrect. Please try again.',
  );

  await page.getByLabel('Password').fill('Playwright123!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('status')).toHaveText(
    'Signed in successfully. Welcome to the demo!',
  );
});
