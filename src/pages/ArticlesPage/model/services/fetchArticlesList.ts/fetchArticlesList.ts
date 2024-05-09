import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/config/state.schema';
import { Article, ArticleSortField } from '@/entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelector';
import { SortOrder } from '@/shared/types/types';
import { ArticleType } from '@/entities/Article/model/types/article';

interface FetchArticlesListProps {
    replace?: true;
    order?: SortOrder;
    sort?: ArticleSortField;
    search?: string;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (payload, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const page = getArticlesPageNum(getState());
        const limit = getArticlesPageLimit(getState());
        const order = getArticlesPageOrder(getState());
        const sort = getArticlesPageSort(getState());
        const search = getArticlesPageSearch(getState());
        const type = getArticlesPageType(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _order: order,
                    _sort: sort,
                    type: type === ArticleType.ALL ? undefined : type,
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
