import { By, WebDriver, until } from 'selenium-webdriver';
import { BasePage } from './basePage';


export class LoginPage extends BasePage {
    protected urlPage: string = 'https://www.onliner.by/';
    public usernameElement: string;
    public passwordElement: any;
    public loginButtonElement: any;
    public invalidCredentialsErrorMessage: any;
    public catalogButtonElement: string;

    constructor(driver: WebDriver) {
        super(driver);
        this.usernameElement = "input[placeholder='Ник или e-mail']"
        this.passwordElement = "input[placeholder='Пароль']"
        this.loginButtonElement = "button.auth-button.auth-button_primary"
        this.invalidCredentialsErrorMessage = "div.auth-form__description_error"
        this.catalogButtonElement = '//a[contains(text(), "Зарегистрироваться на Onlíner") and @href="https://profile.onliner.by/registration"]'
    }
    
    async login(username: string, password: string) {
        const usernameField = await this.driver.findElement(By.css(this.usernameElement));
        await usernameField.sendKeys(username);
        const passwordField = await this.driver.findElement(By.css(this.passwordElement));
        await passwordField.sendKeys(password);
        const loginButton = await this.driver.findElement(By.css(this.loginButtonElement));
        await loginButton.click();
    }

    async waitForElementToBeLocatedAndGetText() {
        const errorMessage = await this.driver.wait(until.elementLocated(By.css(this.invalidCredentialsErrorMessage)), 5000);
        const errorMessageText = await errorMessage.getText();
        return errorMessageText;
    }

    async clickOnRegisterButton() {
        const catalogButton = await this.driver.findElement(By.xpath(this.catalogButtonElement));
        await catalogButton.click();
    }   
}