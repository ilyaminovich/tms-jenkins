import Page from '../pageobjects/page'
import { $ } from '@wdio/globals';

class SearchResultPage extends Page {

    constructor() {
        super();
    }

    get getSearchResults() {
        const searchResultsElement = $("//div[@class='search_results']");
        searchResultsElement.waitForDisplayed();
        return searchResultsElement.getText();
    }
}

export default SearchResultPage;