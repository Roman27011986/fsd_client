import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
void, void, IThunkConfig<string>
>(
    'articlePage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const hasMore = getArticlesPageHasMore(thunkAPI.getState());
        const page = getArticlesPageNum(thunkAPI.getState());
        const isLoading = getArticlesPageIsLoading(thunkAPI.getState());

        if (hasMore && !isLoading) {
            thunkAPI.dispatch(articlesPageActions.setPage(page + 1));
            thunkAPI.dispatch(fetchArticlesList({
                page: page + 1,
            }));
        }
    },
);
