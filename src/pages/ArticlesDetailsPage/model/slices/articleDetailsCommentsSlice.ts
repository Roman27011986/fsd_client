import {
    createEntityAdapter,
    createSlice,
    configureStore,
    EntityState,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { IArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<IComment, string>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetails',
    initialState: commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
