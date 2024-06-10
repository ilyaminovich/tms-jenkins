import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage'

export class ContactPage extends BasePage{
    readonly page: Page;
    protected urlPage: string = 'https://3dnews.ru/contact';
    private blockOffice: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.blockOffice = 'p.h3:has-text("Офис")';
    }

async checkThatHeaderIsVisible() {
    await expect(this.page.locator(this.blockOffice)).toBeVisible();
}
}