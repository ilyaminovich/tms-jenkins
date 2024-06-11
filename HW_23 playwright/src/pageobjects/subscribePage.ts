import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from './basePage'

export class SubscribePage extends BasePage{
    readonly page: Page;
    protected urlPage: string = 'https://3dnews.ru/subscribe';
    private getEmailField: Locator;
    private getSubscribeButton: Locator;
    private getTextErrorSubscribe: Locator;
    private logoLocator: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;
        this.getEmailField = page.locator('input[name="email"]');
        this.getSubscribeButton = page.locator('input[type="submit"][value="Подписаться"]');
        this.getTextErrorSubscribe = page.locator('div.subscribe__box');
        this.logoLocator = page.locator('img[src="/assets/images/logo.png"][alt="логотип 3DNews"]');
    }

async subscriptionToNewsletterUpdates() {
    await this.getEmailField.fill('test123');
    await this.getSubscribeButton.click();
}

async checkErrorSubscribe() {
    const textErrorSubscribe = await this.getTextErrorSubscribe.innerText();
    expect(textErrorSubscribe).toBeTruthy();
}

async clickOnLogo() {
    await this.logoLocator.click();
}
}