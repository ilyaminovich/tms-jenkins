import { type Page } from '@playwright/test'

export abstract class BasePage {
    readonly page: Page;
    protected abstract urlPage: string;


    constructor(page: Page) {
        this.page = page;
    }

    async openPage() {
        await this.page.goto(this.urlPage);
    }
}