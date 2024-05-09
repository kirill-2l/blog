describe('User visits articles page', () => {
    beforeEach(() => {
        cy.login().then((login) => {
            cy.visit('/articles');
        });
    });
    it('User sees articles', () => {
        cy.getBySel('ArticlesList').should('exist');
        cy.getBySel('ArticlesListItem').should('have.length.greaterThan', 3);
    });
});
