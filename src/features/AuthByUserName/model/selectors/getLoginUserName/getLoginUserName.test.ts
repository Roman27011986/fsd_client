import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/providers/StoreProvider/ui/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName.test', () => {
    test('should return userName', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                userName: 'admin',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('admin');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
