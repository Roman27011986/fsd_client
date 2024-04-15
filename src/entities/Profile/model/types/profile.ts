import { Country } from 'entities/Country/model/types/country';
import { CurrencyType } from 'entities/Currency';

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
}
