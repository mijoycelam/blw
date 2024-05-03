import { Given, When, Then } from '@cucumber/cucumber';
import { expect, chromium, Page, Browser } from '@playwright/test';

let page: Page;
let browser: Browser;

Given('I am on the home page', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('http://localhost:4200/');
});

When('I click on the button with ID {string}', async (buttonId: string) => {
  await page.click(`#${buttonId}`);
});

Then('I should be navigated to {string}', async (expectedUrl: string) => {
  await page.waitForNavigation();
  expect(page.url()).toBe(expectedUrl);
  await browser.close();
});
