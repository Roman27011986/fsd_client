import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entities/User';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUserNameProps {
    userName: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<IUser, LoginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/login', authData);

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
