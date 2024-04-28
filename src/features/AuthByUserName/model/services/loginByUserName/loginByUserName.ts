import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IUser, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUserNameProps {
    userName: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<
IUser, LoginByUserNameProps, IThunkConfig<string>
>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<IUser>('/login', authData);
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
