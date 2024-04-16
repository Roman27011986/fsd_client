import { Country } from 'entities/Country/model/types/country';
import { CurrencyType } from 'entities/Currency';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: CurrencyType;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
}
