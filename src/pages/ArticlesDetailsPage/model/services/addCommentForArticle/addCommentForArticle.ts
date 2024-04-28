import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { addCommentFormActions } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
IComment, string, IThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const userData = getUserAuthData(thunkAPI.getState());
        const article = getArticleDetailsData(thunkAPI.getState());

        if (!text || !userData || !article) {
            return thunkAPI.rejectWithValue('no data');
        }

        const bodyData = {
            articleId: article.id,
            userId: userData.id,
            text,
        };

        try {
            const response = await thunkAPI.extra.api.post<IComment>('/comments', bodyData);
            if (!response.data) {
                throw new Error();
            }
            thunkAPI.dispatch(fetchCommentsByArticleId(article.id));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
