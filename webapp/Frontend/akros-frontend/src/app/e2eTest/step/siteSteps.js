// step/siteSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the home page', async function () {
  console.log("im in given");

  await this.launchBrowser();
  await this.page.goto('http://localhost:4200/');
});

When('I click on the button with ID {string}', async function (buttonId) {
  console.log("im in when");

  await this.page.click(`#${buttonId}`);
  await this.page.waitForTimeout(3000);

});

Then('I should be navigated to {string}', async function (expectedUrl) {
  console.log("url ", this.page.url());
  console.log("expectedUrl ", expectedUrl);
  console.log("expectedUrl ", expectedUrl === (this.page.url()));

  expect(this.page.url()).toMatch(expectedUrl);
  await this.closeBrowser();
});
