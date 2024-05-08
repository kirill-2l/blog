import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/libs/tests/componentRender';

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => cy.mount(
        <TestProvider><EditableProfileCard id="1" /></TestProvider>,
    ));
});
