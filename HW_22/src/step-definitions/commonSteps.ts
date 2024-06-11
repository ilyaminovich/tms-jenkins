import Page from '../pageobjects/page';
import { Given } from '@cucumber/cucumber';


Given(/^I open the (\w+) website$/, (siteName: string) => {
    let baseUrl: string;

    switch (siteName.toLowerCase()) {
        case 'home':
            baseUrl = 'https://www.kinopoisk.ru';
            break;
        case 'login':
            baseUrl = 'https://passport.yandex.ru/auth';
            break;
        default:
            throw new Error(`No base URL found for site: ${siteName}`);
    }

    Page.open(baseUrl);
});