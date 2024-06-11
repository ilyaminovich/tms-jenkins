import { browser } from '@wdio/globals';

export default class Page {
    public static open(baseUrl: string) {
        return browser.url(baseUrl);
    }
}