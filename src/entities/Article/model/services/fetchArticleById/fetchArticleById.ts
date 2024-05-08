import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/config/state.schema';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (articleId, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;

        if (!articleId) {
            rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error();
            }
            const { data } = response;

            return data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
