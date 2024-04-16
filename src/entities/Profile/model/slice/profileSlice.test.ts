import { DeepPartial } from 'app/providers/StoreProvider/ui/StoreProvider';
import { Country } from 'entities/Country';
import { CurrencyType } from 'entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { IProfile, IProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 38,
    country: Country.RUSSIA,
    lastname: 'Nesterenko',
    first: 'Roman',
    city: 'Mariupol',
    currency: CurrencyType.RUB,
};

describe('profileSlice.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<IProfileSchema> = { readonly: false };

        expect(profileReducer(state as IProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<IProfileSchema> = {
            data,
            form: { username: '' },
        };

        expect(profileReducer(state as IProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data,
            });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<IProfileSchema> = {
            form: { username: '123' },
        };

        expect(profileReducer(state as IProfileSchema, profileActions.updateProfile({ username: '1234' })))
            .toEqual({
                form: { username: '1234' },
            });
    });

    test('test updateProfile service pending', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as IProfileSchema,
            { type: updateProfileData.pending.type },
        ))
            .toEqual({
                isLoading: true,
                validateErrors: undefined,
            });
    });

    test('test updateProfile service fulfilled', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as IProfileSchema,
            { type: updateProfileData.fulfilled.type, payload: data },
        ))
            .toEqual({
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                validateError: undefined,
                form: data,
                data,
            });
    });
});
