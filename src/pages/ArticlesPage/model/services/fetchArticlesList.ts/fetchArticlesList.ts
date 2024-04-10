import { createAsyncThunk } from '@reduxjs/toolkit';
import { matchPath, useSearchParams } from 'react-router-dom';
import { ThunkConfig } from 'app/providers/store/config/state.schema';
import { Article, ArticleSortField } from 'entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelector';
import { SortOrder } from 'shared/types/types';

interface FetchArticlesListProps {
    replace?: true;
    order?: SortOrder,
    sort?: ArticleSortField,
    search?: string,
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (payload, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;
        const page = getArticlesPageNum(getState());
        const limit = getArticlesPageLimit(getState());
        const order = getArticlesPageOrder(getState());
        const sort = getArticlesPageSort(getState());
        const search = getArticlesPageSearch(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _order: order,
                    _sort: sort,
                    q: search,
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
