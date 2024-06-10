import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage {
    public url: string;

    constructor() {
        super();
        this.url = "https://www.drive2.ru/signup/";
    }
}