import { TestAsyncThunk } from 'shared/libs/tests/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { updateProfileData } from './updateProfileData';

const data = {
    country: Country.Ukraine,
    username: 'test',
    age: 20,
    lastname: 'petr',
    first: 'kir',
    city: 'Kiev',
    currency: Currency.USD,
};

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockResolvedValue(Promise.resolve({ data }));

        const res = await thunk.callThunk();

        expect(thunk.api.put)
            .toHaveBeenCalled();
        expect(res.meta.requestStatus)
            .toBe('fulfilled');
        expect(res.payload)
            .toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockResolvedValue(Promise.resolve({ status: 403 }));
        const res = await thunk.callThunk();
        expect(res.meta.requestStatus)
            .toBe('rejected');
        expect(res.payload)
            .toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...data,
                    lastname: '',
                },
            },
        });
        const res = await thunk.callThunk();
        expect(res.meta.requestStatus)
            .toBe('rejected');
        expect(res.payload)
            .toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
