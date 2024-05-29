import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import Page from '../pageobjects/page';
import PageFactory from '../pageobjects/page.factory';
import { clickOnButton, clickOnCheckbox, clickOnLink } from '../utils/clickActions';
import HomePage from '../pageobjects/home.page';
import LoginPage from '../pageobjects/login.page';


const homePage = PageFactory.getPage('home')  as HomePage;
const loginPage = PageFactory.getPage('login') as LoginPage;


Given(/^I open the Kinopoisk website$/, () => {
    Page.open();
});


When(/^I click on the (button|checkbox|link) on the page$/, async (elementType: string) => {
    const element = await homePage.getButtonPersonalAccount;

    switch (elementType) {
        case 'button':
            await clickOnButton(element);
            break;
        case 'checkbox':
            await clickOnCheckbox(element);
            break;
        case 'link':
            await clickOnLink(element);
            break;
        default:
            throw new Error(`Unknown element type: ${elementType}`);
    }
});

When(/^I login with (\w+) and (.+)$/, async (loginOption: string, loginEmailOrPhone: string) => {
    await loginPage.login(loginOption, loginEmailOrPhone);
});

When(/^I search for "([^"]*)"$/, async (movieTitle: string) => {
    await homePage.searchForMovie(movieTitle);
});

Then(/^I should see the Kinopoisk logo$/, async () => {
    const logoIsDisplayed = await homePage.logo.isDisplayed();
    expect(logoIsDisplayed).to.be.true;
});

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.equal(message);
});

Then(/^I should see search results for "([^"]*)"$/, async (movieTitle: string) => {
    const searchResultsElement = await $("//div[@class='search_results']");
    const searchResultsTitleText = await searchResultsElement.getText();
    expect(searchResultsTitleText).to.include(movieTitle);
});

Then(/^I should see a Watch Movie button$/, async () => {
    const watchMovieButton = await $(homePage.watchMovieButtonElement);
    expect(watchMovieButton).to.exist;
});

Then(/^I should see the link to the section$/, async () => {
    const movieTicketSectionLink = await $(homePage.movieTicketSectionElement);
    expect(movieTicketSectionLink).to.exist;
});



