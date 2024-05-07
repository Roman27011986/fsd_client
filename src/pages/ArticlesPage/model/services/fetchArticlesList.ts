import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import { getArticlesPageLimit } from '../selectors/articlesPageSelectors';

interface IfetchArticlesList {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
IArticle[], IfetchArticlesList, IThunkConfig<string>
>(
    'articlePage/fetchArticlesList',
    async ({ page = 1 }, thunkAPI) => {
        const limit = getArticlesPageLimit(thunkAPI.getState());
        try {
            const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
