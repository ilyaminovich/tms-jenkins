import { By, WebDriver } from 'selenium-webdriver';
import { BasePage } from './basePage';


export class HeaderPage extends BasePage {
    protected urlPage: string = 'https://www.onliner.by/';
    public enterLoginButton: string;
    public catalogSectionButton: string;

    constructor(driver: WebDriver) {
        super(driver);
        this.enterLoginButton = "div.auth-bar__item.auth-bar__item--text"
        this.catalogSectionButton = "a.b-main-navigation__link:nth-child(2)> span.b-main-navigation__text"
    }

    async clickOnEnterLoginButton() {
        const enterLoginButton = await this.driver.findElement(By.css(this.enterLoginButton));
        await enterLoginButton.click();
    }   
    
    async clickCatalogSectionButton() {
        const catalogSectionButton = await this.driver.findElement(By.css(this.catalogSectionButton));
        await catalogSectionButton.click();
    }   
}