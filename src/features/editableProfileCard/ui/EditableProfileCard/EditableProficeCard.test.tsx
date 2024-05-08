import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { componentRender } from '@/shared/libs/tests/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profile.slice';
import { api } from '@/shared/api/axios.instance';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin213',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('EditableProfileCard', () => {
    test('Readonly mode has  to switch', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('Form reset to initial data on reset button click ', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastNameInput'));

        expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('');
        expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('');

        await userEvent.type(screen.getByTestId('ProfileCard.FirstNameInput'), 'test');
        await userEvent.type(screen.getByTestId('ProfileCard.LastNameInput'), 'test');

        expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('test');
        expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('test');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('admin');
    });

    test('Error block has to appear', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });
    test('If there are no any errors data put request has to be sent', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        const mockPutRequest = jest.spyOn(api, 'put');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.type(screen.getByTestId('ProfileCard.FirstNameInput'), 'user');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutRequest).toHaveBeenCalled();
    });
});
