import { BasePage } from "./basePage";

export class TopBar extends BasePage {
    public url!:string;
    topBarLink: string;

    constructor() {
        super();
        this.topBarLink = ".c-button";

}

public clickOnTopBarLink(link: string){
    cy.get(this.topBarLink)
        .contains(link)
        .click()
}
}