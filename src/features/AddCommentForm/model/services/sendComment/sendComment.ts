import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getAddCommentFormText } from '../../selectors/AddCommentFormSelectors';
import { addCommentFormActions } from '../../slices/addCommentFormSlice';

interface LoginByUserNameProps {
    userName: string;
    password: string;
}

export const sendComment = createAsyncThunk<
IComment, void, IThunkConfig<string>
>(
    'addCommentForm/sendComment',
    async (_, thunkAPI) => {
        const userData = getUserAuthData(thunkAPI.getState());
        const text = getAddCommentFormText(thunkAPI.getState());
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
            thunkAPI.dispatch(addCommentFormActions.setText(''));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
