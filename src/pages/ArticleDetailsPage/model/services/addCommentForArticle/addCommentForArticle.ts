import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/store/config/state.schema';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import {
    fetchCommentsByArticleId,
} from
    '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
        const {
            dispatch,
            extra,
            getState,
            rejectWithValue,
        } = thunkApi;
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());
        if (!userData || !text || !article) {
            rejectWithValue('error');
        }
        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }

            const { data } = response;

            dispatch(fetchCommentsByArticleId(article?.id));

            return data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
