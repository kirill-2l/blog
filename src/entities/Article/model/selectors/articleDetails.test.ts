import { StateSchema } from 'app/providers/store';
import { getProfileForm } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    getArticleDetailsData, getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';

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

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },

        };
        expect(getArticleDetailsData(state as StateSchema))
            .toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {},

        };
        expect(getArticleDetailsData(state as StateSchema))
            .toEqual(undefined);
    });
    test('should return iLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },

        };
        expect(getArticleDetailsIsLoading(state as StateSchema))
            .toEqual(true);
    });
    test('should work with empty state iLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {},

        };
        expect(getArticleDetailsIsLoading(state as StateSchema))
            .toEqual(false);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },

        };
        expect(getArticleDetailsError(state as StateSchema))
            .toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {},

        };
        expect(getArticleDetailsError(state as StateSchema))
            .toEqual(undefined);
    });
});
