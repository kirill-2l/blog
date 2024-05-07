import { login } from './common/login';
import { getBySel } from './common/getBySel';

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
Cypress.Commands.add('login', login);
Cypress.Commands.add('getBySel', getBySel);
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
declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<void>;

            getBySel(
                selector: string,
                args?: Partial<Loggable & Timeoutable & Withinable & Shadow>
            ): Chainable<JQuery<HTMLElement>>;

        }
    }
}

export {};
