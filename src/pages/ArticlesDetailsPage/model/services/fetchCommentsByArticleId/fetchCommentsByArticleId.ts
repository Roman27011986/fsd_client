import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
IComment[], string, IThunkConfig<string>
>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
