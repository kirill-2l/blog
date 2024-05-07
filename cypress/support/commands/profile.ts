export interface UpdateProfileProps {
    firstName?: string;
    lastName?: string;
}

export const updateProfile = (props?: UpdateProfileProps) => {
    const {
        firstName = 'first',
        lastName = 'last',
    } = props ?? {};
    cy.getBySel('EditableProfileCardHeader.EditButton')
        .click();
    cy.getBySel('ProfileCard.FirstNameInput')
        .clear()
        .type(firstName);
    cy.getBySel('ProfileCard.LastNameInput')
        .clear()
        .type(lastName);
    cy.getBySel('EditableProfileCardHeader.SaveButton')
        .click();
};
export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            Authorization: 'Bearer token',
        },
        body: {
            id: '100',
            first: 'roman',
            lastname: 'sidorov',
            age: 465,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'cypressUserAdmin',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(props?: UpdateProfileProps): Chainable<void>;

            resetProfile(profileId: string,): Chainable<void>;
        }
    }
}
