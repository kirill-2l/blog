import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';

export enum ValidateProfileError {
    NO_DATA = 'NO_DATA',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading?: boolean;
    form?: Profile;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
}
