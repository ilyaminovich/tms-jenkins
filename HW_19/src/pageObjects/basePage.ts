import { WebDriver, until } from 'selenium-webdriver';

export abstract class BasePage {
    protected abstract urlPage: string;

    constructor(protected driver: WebDriver) {
    }    

    async maximizeWindow() {
        await this.driver.manage().window().maximize();
    }

    async openPage() {
        await this.driver.get(this.urlPage);
    }

    async waitForPageLoad(timeout: number = 5000) {
        await this.driver.wait(until.urlIs(this.urlPage), timeout);
    }

    async getCurrentUrlValue() {
        return this.driver.getCurrentUrl()
    }


}
