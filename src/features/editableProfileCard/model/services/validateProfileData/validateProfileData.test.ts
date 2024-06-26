import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '@/features/editableProfileCard/model/types/profile';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData.test', () => {
    test('success', () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('error without first and last name', () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect country', () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
