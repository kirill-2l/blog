import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelector';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPage.slice';
import {
    fetchArticlesList,
} from 'pages/ArticlesPage/model/services/fetchArticlesList.ts/fetchArticlesList';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types/types';
import { ArticleType } from 'entities/Article/model/types/article';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const {
            getState,
            dispatch,
        } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;
            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(articlesPageActions.setType(typeFromUrl));
            }
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
