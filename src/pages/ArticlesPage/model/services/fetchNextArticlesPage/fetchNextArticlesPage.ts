import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/config/state.schema';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelector';
import { articlesPageActions } from '@/pages/ArticlesPage/model/slice/articlesPage.slice';
import {
    fetchArticlesList,
} from '@/pages/ArticlesPage/model/services/fetchArticlesList.ts/fetchArticlesList';

interface FetchArticlesListArgs {
    page: number;
}

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const {
            dispatch,
            getState,
        } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
