import { TestAsyncThunk } from 'shared/libs/tests/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ArticleView } from 'entities/Article';
import { ArticleSortField } from 'entities/Article/model/types/article';
import {
    fetchArticlesList,
} from '../fetchArticlesList.ts/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList.ts/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                hasMore: true,
                limit: 5,
                isLoading: false,
                entities: {},
                order: 'asc',
                search: '',
                sort: ArticleSortField.CREATED,
                _inited: false,
                error: undefined,
                view: ArticleView.TILE,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch)
            .toBeCalledTimes(4);
    });
    test('fetchArticlesList is not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                hasMore: false,
                limit: 5,
                _inited: false,
                order: 'asc',
                search: '',
                sort: ArticleSortField.CREATED,
                isLoading: false,
                entities: {},
                error: undefined,
                view: ArticleView.TILE,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch)
            .toBeCalledTimes(2);
        expect(fetchArticlesList)
            .not
            .toHaveBeenCalled();
    });
});
