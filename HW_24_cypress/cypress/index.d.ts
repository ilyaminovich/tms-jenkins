/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      login(emailOrPhone: string, password: string): void;
      search(query: string): void;
    }
  }