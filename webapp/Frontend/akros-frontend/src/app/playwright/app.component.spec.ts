const { test, expect, chromium } = require('@playwright/test');

test('Login form test', async () => {
  // Launch the browser in headful mode
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:4200/');
  // Fill in the username and password
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');

  await page.click('button[id="agrostest"]');

  await expect(page).toHaveURL('http://localhost:8889/greet');
  await browser.close();
});
