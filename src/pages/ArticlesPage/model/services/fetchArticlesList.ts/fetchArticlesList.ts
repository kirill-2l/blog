import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store/config/state.schema';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;
        try {
            const response = await extra.api.get<Article[]>('/articles');
            if (!response.data) {
                throw new Error();
            }

            const { data } = response;

            return data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
