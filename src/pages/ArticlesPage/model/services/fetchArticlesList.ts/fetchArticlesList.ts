import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store/config/state.schema';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelector';

interface FetchArticlesListArgs {
    page: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListArgs,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (payload, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;
        const { page = 1 } = payload;
        const limit = getArticlesPageLimit(getState());
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });
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
