import { When, Then } from '@cucumber/cucumber';
import PageFactory from '../pageobjects/page.factory';
import HomePage from '../pageobjects/home.page';
import { elementIsDisplayed } from '../utils/clickActions';


const homePage = PageFactory.getPage('home')  as HomePage;


When(/^I click on the (loginButton|WatchMovie) on the Homepage$/, async (elementType: string) => {
    let element: any;

    switch (elementType) {
        case 'loginButton':
            element = await homePage.personalAccountButton;
            break;
        case 'WatchMovie':
            element = await homePage.watchMovieButtonElement;
            break;
        default:
            throw new Error(`Unknown element type: ${elementType}`);
    }

    await element.click();
});

Then(/^I have to see the elements on the Homepage$/, async () => {
    await elementIsDisplayed(await homePage.logo, true);
    await elementIsDisplayed(await homePage.watchMovieButtonElement, true);
    await elementIsDisplayed(await homePage.movieTicketSectionElement, true);
});

When(/^I search for "([^"]*)"$/, async (movieTitle: string) => {
    await homePage.searchForMovie(movieTitle);
});