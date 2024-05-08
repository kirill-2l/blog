import { LoginSchema } from '@/features/AuthByUsername';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileSchema } from '@/features/editableProfileCard';
import { ValidateProfileError } from '@/features/editableProfileCard/model/types/profile';
import {
    updateProfileData,
} from '@/features/editableProfileCard/model/services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profile.slice';

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

describe('profile.slice.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(profileReducer(state as LoginSchema, profileActions.setReadOnly(true)))
            .toEqual({ readonly: true });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
        };
        expect(profileReducer(state as LoginSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                data,
                validationErrors: undefined,
                form: data,
            });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                username: '123',
            },
        };
        expect(profileReducer(state as LoginSchema, profileActions.updateProfile({
            username: '12313',
        })))
            .toEqual({
                form: {
                    username: '12313',
                },
            });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        // @ts-ignore
        expect(profileReducer(state as LoginSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateErrors: undefined,
            });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as LoginSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                form: data,
                data,
            });
    });
});
