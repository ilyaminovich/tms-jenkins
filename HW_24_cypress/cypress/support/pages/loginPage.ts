import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    public url: string;

    constructor() {
        super();
        this.url = 'https://www.drive2.ru/reception/';
    }

    public clickVKButton() {
        cy.get('div.c-button__icon.m-icon.i-vk').click();
    }

    public checkValidationError(message: string) {
        cy.wait(5000); //на капчу
        cy.contains(message).should('be.visible');
    }
}





// }