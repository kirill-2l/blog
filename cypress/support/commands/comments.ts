export const addComment = (comment: string) => {
    cy.getBySel('AddCommentForm.Input')
        .clear()
        .type(comment);
    cy.getBySel('AddCommentForm.Submit')
        .click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(comment: string): Chainable<string>;
        }
    }
}
