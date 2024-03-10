import { Currency } from 'shared/const/common';

export interface Profile {
    first: string,
    lastname: string,
    age: 22,
    currency: typeof Currency[keyof typeof Currency],
    country: string,
    city: string,
    username: string,
    avatar: string
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean,
    error?: boolean,
    readonly: boolean
}
