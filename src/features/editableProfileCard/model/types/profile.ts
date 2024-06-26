import { Profile } from '@/entities/Profile';

export enum ValidateProfileError {
    NO_DATA = 'NO_DATA',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
    data?: Profile;
    isLoading?: boolean;
    form?: Profile;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
}
