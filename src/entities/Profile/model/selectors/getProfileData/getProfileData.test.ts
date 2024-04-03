import { StateSchema } from 'app/providers/store';
import { getProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

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

describe('getProfileData.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {},
            },
        };
        expect(getProfileData(state as StateSchema))
            .toEqual({});
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema))
            .toEqual(undefined);
    });
});
