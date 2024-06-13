/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (emailOrPhone: string, password: string) => {
    cy.get('input.y-input.u-100').type(emailOrPhone);
    cy.get('input[name="Password"]').type(password);
    cy.get("button.c-button.c-button--primary.c-button--alt-l.u-100").click();
  });

  Cypress.Commands.add('search', (query: string) => {
    cy.get('input[type="search"]')
      .type(query)
      .type('{enter}');
  });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//         login(emailOrPhone: string, password: string): void;
    // interface Chainable<Subject> {
    //   login(emailOrPhone: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }