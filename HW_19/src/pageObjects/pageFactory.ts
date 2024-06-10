import { WebDriver } from 'selenium-webdriver';
import { HeaderPage } from './headerPage';
import { HomePage } from './homePage';
import { LoginPage } from './loginPage';
import { CatalogPage } from './catalogPage';
import { RegistrationPage } from './registrationPage';

export default class PageFactory {
    static getPage(driver: WebDriver, pageName: string) {
        switch (pageName) {
            case "HomePage":
                return new HomePage(driver)
            case "LoginPage":
                return new LoginPage(driver)
            case "HeaderPage":
                return new HeaderPage(driver)
            case "CatalogPage":
                return new CatalogPage(driver)
            case "RegistrationPage":
                    return new RegistrationPage(driver)
            default:
                throw new Error('Unknown page name');
        }
    }
}