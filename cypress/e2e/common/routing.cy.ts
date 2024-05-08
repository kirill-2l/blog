describe('Routing', () => {
    describe('User is logged in', () => {
        beforeEach(() => {
            cy.login();
        });
        it("Open's Profile page", () => {
            cy.visit('/profile/100');
            cy.getBySel('ProfilePage').should('exist');
        });
        it("Open's Articles page", () => {
            cy.visit('/articles');
            cy.getBySel('ArticlesPage').should('exist');
        });
    });
    describe('User is not logged in', () => {
        it('Main page', () => {
            cy.visit('/');
            cy.getBySel('MainPage');
            cy.get('[data-testid=MainPage]').should('exist');
        });
        it('Profile page can not be opened', () => {
            cy.visit('/profile/1');
            cy.getBySel('MainPage').should('exist');
        });
        it('Non-existent page', () => {
            cy.visit('/non-existent-123');
            cy.getBySel('NotFoundPage').should('exist');
        });
    });
});
