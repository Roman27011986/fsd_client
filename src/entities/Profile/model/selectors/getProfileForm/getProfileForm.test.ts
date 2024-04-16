import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/providers/StoreProvider/ui/StoreProvider';
import { Country } from 'entities/Country';
import { CurrencyType } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            age: 38,
            country: Country.RUSSIA,
            lastname: 'Nesterenko',
            first: 'Roman',
            city: 'Mariupol',
            currency: CurrencyType.RUB,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
