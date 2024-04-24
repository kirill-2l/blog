import { StateSchema } from '@/app/providers/store';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import {
    getProfileForm,
} from '@/features/editableProfileCard/model/selectors/getProfileForm/getProfileForm';

const data = {
    country: Country.Ukraine,
    username: 'test',
    age: 20,
    lastname: 'petr',
    first: 'kir',
    avatar: 'str',
    city: 'Kiev',
    currency: Currency.USD,
};

describe('getProfileForm.test', () => {
    test('should return form data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema))
            .toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema))
            .toEqual(undefined);
    });
});
