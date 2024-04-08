import { DeepPartial } from 'app/providers/StoreProvider/ui/StoreProvider';
import { ILoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set userName', () => {
        const state: DeepPartial<ILoginSchema> = { userName: 'admin' };

        expect(loginReducer(state as ILoginSchema, loginActions.setUserName('admin')))
            .toEqual({ userName: 'admin' });
    });

    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = { password: '123' };

        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('123')))
            .toEqual({ password: '123' });
    });
});
