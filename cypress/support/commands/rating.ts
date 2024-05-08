export const setRate = (starsCount: number, feedback = 'feedback') => {
    cy.getBySel(`StarRating.${starsCount}`).click();
    cy.getBySel('RatingCard.Input').type(feedback);
    cy.getBySel('RatingCard.Submit').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<string>;
        }
    }
}
