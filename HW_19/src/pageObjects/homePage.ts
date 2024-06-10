import { WebDriver } from 'selenium-webdriver';
import { BasePage } from './basePage';
import driver from '../../constants/driver';

export class HomePage extends BasePage {
    protected urlPage: string = 'https://www.onliner.by/';
    private static instance: HomePage;

    protected constructor(driver: WebDriver) {
        super(driver);
    }

    //Singleton
    static getInstance() {
        if(!this.instance) {
            this.instance = new HomePage(driver)
        }

        return this.instance
    }
}