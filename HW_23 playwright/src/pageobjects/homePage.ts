import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage'

export class HomePage extends BasePage{
    readonly page: Page;
    public urlPage: string = 'https://3dnews.ru/';
    private titleRegExp: RegExp;
    private getContactsLink: Locator;
    private getSubscribeIcon: Locator;
    private getCurrentDate: Locator;

    constructor(page: Page) {
        super(page); 
        this.page = page;
        this.titleRegExp = /Все самое интересное из мира IT-индустрии/;
        this.getContactsLink = page.locator('a[href="/contact"]');
        this.getSubscribeIcon = page.locator('a.subs-b[href="/subscribe"]');
        this.getCurrentDate = page.locator('div#date.left');
    }

    async checkTitle() {
        await expect(this.page).toHaveTitle(this.titleRegExp);
    }

    async clickOnContactsLink() {
        await this.getContactsLink.click()
    }

    async clickOnSubscribeIcon() {
        await this.getSubscribeIcon.click()
    }

    async getCurrentDateFormatted(): Promise<string> {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
        const formattedDateWithoutYear = date.toLocaleDateString('ru-RU', options);
        const year = date.getFullYear();
        return `Сегодня ${formattedDateWithoutYear} ${year}`;
    }

    async checkCurrentDate() {
        const expectedDate = await this.getCurrentDateFormatted();
        const actualDate = await this.getCurrentDate.innerText();
        expect(actualDate.trim()).toBe(expectedDate);
    }
}