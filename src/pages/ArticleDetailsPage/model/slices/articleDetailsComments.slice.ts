import {
    createEntityAdapter, createSelector, createSlice, EntityState, PayloadAction,
    // omit other imports
} from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';
import { StateSchema } from 'app/providers/store';
import {
    fetchArticleById,
} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { Article } from 'entities/Article';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
});

export const getArticlesComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

export const initialState = commentsAdapter.getInitialState({
    status: 'idle',
    error: null,
});

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<IComment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailsCommentsReducer,
} = articleDetailsCommentsSlice;
