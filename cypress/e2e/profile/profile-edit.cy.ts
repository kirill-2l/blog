let userId: string;

describe('User go to profile page', () => {
    beforeEach(() => {
        cy.login()
            .then((user) => {
                userId = user.id;
                cy.visit(`profile/${user.id}`);
            });
    });
    afterEach(() => {
        cy.resetProfile(userId);
    });
    it('Profile page is loaded', () => {
        cy.getBySel('ProfilePage')
            .should('exist');
    });
    it('Edit profile data', () => {
        const firstName = 'first';
        const lastName = 'last';
        cy.updateProfile({
            firstName,
            lastName,
        });
        cy.getBySel('ProfileCard.FirstNameInput')
            .should('have.value', firstName);
        cy.getBySel('ProfileCard.LastNameInput')
            .should('have.value', lastName);
    });
});
