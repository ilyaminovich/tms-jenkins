import { browser } from '@wdio/globals';

export default class Page {
    public static open(path: string = '') {
        return browser.url(`https://www.kinopoisk.ru/${path}`);
    }
}