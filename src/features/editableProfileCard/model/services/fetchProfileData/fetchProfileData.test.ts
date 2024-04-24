import { TestAsyncThunk } from '@/shared/libs/tests/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
    country: Country.Ukraine,
    username: 'test',
    age: 20,
    lastname: 'petr',
    first: 'kir',
    avatar: '',
    city: 'Kiev',
    currency: Currency.USD,
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockResolvedValue(Promise.resolve({ data }));

        const res = await thunk.callThunk('1');

        expect(thunk.api.get)
            .toHaveBeenCalled();
        expect(res.meta.requestStatus)
            .toBe('fulfilled');
        expect(res.payload)
            .toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));
        const res = await thunk.callThunk('1');
        expect(res.meta.requestStatus)
            .toBe('rejected');
    });
});
