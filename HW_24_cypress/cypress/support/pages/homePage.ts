import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    public url: string;

    constructor() {
        super();
        this.url = "https://www.drive2.ru/";
    }
}