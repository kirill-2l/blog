import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store/config/state.schema';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelector';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPage.slice';
import {
    fetchArticlesList,
} from 'pages/ArticlesPage/model/services/fetchArticlesList.ts/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    (_, thunkApi) => {
        const {
            dispatch,
            getState,
        } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
