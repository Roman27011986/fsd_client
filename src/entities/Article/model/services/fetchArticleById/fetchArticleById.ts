import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
IArticle, string, IThunkConfig<string>
>(
    'articleDetails/fetchArticleById',
    async (aid, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IArticle>(`/articles/${aid}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
