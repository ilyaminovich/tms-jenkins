import { WebDriver } from 'selenium-webdriver';
import { BasePage } from './basePage';


export class CatalogPage extends BasePage {
    protected urlPage: string = 'https://catalog.onliner.by/';

    constructor(driver: WebDriver) {
        super(driver);
    }      
}