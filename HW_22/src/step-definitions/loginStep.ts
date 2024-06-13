import { Then, When } from '@cucumber/cucumber';
import PageFactory from '../pageobjects/page.factory';
import LoginPage from '../pageobjects/login.page';
import { elementIsDisplayed, checkUrl } from '../utils/clickActions';
import { logger } from "../../support/logger.ts";

const loginPage = PageFactory.getPage('login') as LoginPage;


When(/^I login with (\w+) and enter (.+)$/, async (loginOption: string, loginEmailOrPhoneValue: string) => {
    await loginPage.login(loginOption, loginEmailOrPhoneValue);
});

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
    logger.info(`Validation message is displayed ${message}`)
    await loginPage.checkErrorMessage(message);
});

Then(/^I should validate that login form displaying correctly$/, async () => {
    const emailButton = await $(loginPage.emailButton);
    const phoneButton = await $(loginPage.phoneButton);
    const loginEmailField = await $(loginPage.loginEmailField);
    const loginButton = await $(loginPage.loginButton);

    await elementIsDisplayed(emailButton, true);
    await elementIsDisplayed(phoneButton, true);
    await elementIsDisplayed(loginEmailField, true);
    await elementIsDisplayed(loginButton, true);
});

Then('I should be redirected to the Loginpage', async () => {
    await checkUrl('https://passport.yandex.ru/auth');
});




