let articleId: string;

describe('User visits article detail page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle()
            .then((article) => {
                articleId = article.id;
                cy.visit(`articles/${article.id}`);
            });
    });
    afterEach(() => {
        cy.deleteArticle(articleId);
    });
    it('User sees article', () => {
        cy.getBySel('ArticlesDetail.Info')
            .should('exist');
    });
    it('User sees recommendations ', () => {
        cy.getBySel('ArticlesRecommendationsList')
            .should('exist');
    });
    it('User sends comment ', () => {
        cy.getBySel('ArticlesDetail.Info');
        cy.getBySel('AddCommentForm')
            .scrollIntoView();
        cy.addComment('test');
        cy.getBySel('CommentCard.Content')
            .should('have.length', 1);
    });
    it('User rate article ', () => {
        cy.getBySel('ArticlesDetail.Info');
        cy.getBySel('RatingCard')
            .scrollIntoView();
        cy.setRate(3, 'feedback');
        cy.get('[data-selected=true]')
            .should('have.length', 3);
    });
});
