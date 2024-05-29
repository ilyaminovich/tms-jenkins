import { $ } from '@wdio/globals';
import Page from './page';
import { clickOnButton   } from '../utils/clickActions';


class LoginPage extends Page {
    public emailButton: string;
    public phoneButton: string;
    public loginEmailField: string;
    public phoneField: string;
    public loginButton: string;
    public errorMessageLoggingInEmail: string;
    public errorMessageLoggingInPhone: string;

    constructor() {
        super();
        this.emailButton = 'button[data-type="login"]';
        this.phoneButton = 'button[data-type="phone"]';
        this.loginEmailField = "input#passp-field-login"
        this.phoneField = "input#passp-field-phone"
        this.loginButton = '[data-t="button:action:passp:sign-in"]'
        this.errorMessageLoggingInEmail = '[data-t="field:input-login:hint"]'
        this.errorMessageLoggingInPhone = '[data-t="field:input-phone:hint"]'
    }

    public async login(loginOption: string, loginEmailOrPhoneValue: string) {
        let inputField;
        if (loginOption === 'email') {
            const emailButton = await $(this.emailButton);
            await clickOnButton(emailButton);
            inputField = await $(this.loginEmailField);
        } else if (loginOption === 'phone') {
            const phoneButton = await $(this.phoneButton);
            await clickOnButton(phoneButton);
            inputField = await $(this.phoneField);
        } else {
            throw new Error('Invalid login option');
        }

        await inputField.setValue(loginEmailOrPhoneValue);
        const submitButton = await $(this.loginButton);
        await clickOnButton(submitButton);
    }

    public async getErrorMessage() {
        const errorMessageElement = await $(this.errorMessageLoggingInEmail);
        const errorMessage = await errorMessageElement.getText();
        return errorMessage;
    }
}

export default LoginPage;