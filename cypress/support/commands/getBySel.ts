// eslint-disable-next-line max-len
export const getBySel = (selector: string, ...args: any) => cy.get(`[data-testid="${selector}"]`, ...args);

declare global {
    namespace Cypress {
        interface Chainable {
            getBySel(
                selector: string,
                args?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
            ): Chainable<JQuery<HTMLElement>>;
        }
    }
}
