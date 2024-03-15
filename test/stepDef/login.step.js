const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../pages/login.page');

Given(/^I open the kasirAja website$/, async () => {
  await LoginPage.open();
  await browser.pause(5000);
});

When(/^I login with invalid email$/, async () => {
  await LoginPage.login('subroto.panduwibisono@gmail.co', '123321saja');
});

Then(/^I should see an error message$/, async () => {
  const errorMessage = await LoginPage.errorMessage;
  await expect(errorMessage).toHaveTextContaining('Kredensial yang Anda berikan salah');
});

When(/^I login with invalid password$/, async () => {
  await LoginPage.login('subroto.panduwibisono@gmail.com', '123123');
});


When(/^I login with valid credentials$/, async () => {
  await LoginPage.login('subroto.panduwibisono@gmail.com', '123321saja');
});

Then(/^I should be on the inventory page$/, async () => {
  await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});


//Data driven test (Scenario Outline) step definitions
When(/^I login with ([^@]+@[^\.]+\.[a-zA-Z]{2,}) and (.+)$/, async (email, password) => {
  await LoginPage.login(email, password);

});