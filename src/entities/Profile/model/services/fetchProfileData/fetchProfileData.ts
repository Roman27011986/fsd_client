import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
IProfile, string, IThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (uid, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IProfile>(`/profile/${uid}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
