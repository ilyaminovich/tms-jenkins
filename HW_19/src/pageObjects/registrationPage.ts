import { By, WebDriver, until } from 'selenium-webdriver';
import { BasePage}  from './basePage';


export class RegistrationPage extends BasePage {
    protected urlPage: string = 'https://profile.onliner.by/registration';
    public password: string;
    public repeatPassword: string;
    public passwordValidationMessage: string;
    public email: string;
    public consentCheckbox: string;
    public registrationButton: string;
    public emailButton: string;

   
    constructor(driver: WebDriver) {
        super(driver);
        this.password = '//input[@placeholder="Придумайте пароль"]';
        this.repeatPassword = '//input[@placeholder="Повторите пароль"]';
        this.passwordValidationMessage = "//div[contains(@class, 'auth-form__description_condensed-other') and contains(text(), 'Минимум 8 символов')]";
        this.email = '//input[@placeholder="Ваш e-mail"]';
        this.consentCheckbox = '//span[@class="auth-form__checkbox-sign"]';
        this.registrationButton = '//button[@class="auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full"]';
        this.emailButton = '//a[@class="auth-button auth-button_appendant auth-button_middle auth-form__button auth-form__button_width_full"]'
    }    

        async enterPassword(password: string) {
        const passwordInput = await this.driver.findElement(By.xpath(this.password));
        await passwordInput.sendKeys(password);
    }

    async findElementAndGetText() {
        const passwordValidationMessage = await this.driver.findElement(By.xpath(this.passwordValidationMessage));
        const textPasswordValidationMessage = await passwordValidationMessage.getText();
        return textPasswordValidationMessage;
    }

    async handleCheckbox(shouldClick: any) {
        const checkbox = await this.driver.findElement(By.xpath(this.consentCheckbox));
        if (shouldClick) {
            await checkbox.click();
        }
    }

    async registration(email: string, password: string, repeatPassword: string, consentCheckbox: boolean) {
        const emailField = await this.driver.findElement(By.xpath(this.email));
        await emailField.sendKeys(email);
        const passwordField = await this.driver.findElement(By.xpath(this.password));
        await passwordField.sendKeys(password);
        const passwordRepeatField = await this.driver.findElement(By.xpath(this.repeatPassword));
        await passwordRepeatField.sendKeys(repeatPassword);
        await this.handleCheckbox(consentCheckbox);
        const registrationButton = await this.driver.findElement(By.xpath(this.registrationButton));
        await registrationButton.click();
    }

    async waitForElementToBeLocatedAndGetText() {
        const emailButton = await this.driver.wait(until.elementLocated(By.xpath(this.emailButton)), 5000);
        const emailButtonText = await emailButton.getText();
        return emailButtonText;
    }
}