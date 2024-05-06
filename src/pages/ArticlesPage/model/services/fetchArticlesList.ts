import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
IArticle[], void, IThunkConfig<string>
>(
    'articlePage/fetchArticlesList',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
