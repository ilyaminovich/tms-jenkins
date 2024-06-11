import { Then } from '@cucumber/cucumber';
import SearchResultPage from '../pageobjects/searchResult.page';
import PageFactory from '../pageobjects/page.factory';
const searchResultPage = PageFactory.getPage('searchResult') as SearchResultPage;


Then(/^I should see search results for "([^"]*)"$/, async (movieTitle: string) => {
    const searchResultsTitleText = await searchResultPage.getSearchResults;
    await expect(searchResultsTitleText).toContain(movieTitle);
});