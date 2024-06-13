export class BasePage {
    public url!: string;

    constructor() {
    }

    public openPage() {
        cy.visit(this.url)
    }

    public getPageUrl(): Cypress.Chainable<string> {
        return cy.url();
    }
    
    public checkThatUrlIs() {
        this.getPageUrl().should("eq", this.url);
    }
}