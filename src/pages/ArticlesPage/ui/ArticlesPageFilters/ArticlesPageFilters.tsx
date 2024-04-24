import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/libs/classNames/classNames';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelector';
import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleTypeTabs, ArticleView,
    ArticleViewSwitcher,
} from '@/entities/Article';
import { articlesPageActions } from '@/pages/ArticlesPage/model/slice/articlesPage.slice';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui';
import {
    fetchArticlesList,
} from '@/pages/ArticlesPage/model/services/fetchArticlesList.ts/fetchArticlesList';
import { useDebounce } from '@/shared/libs/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/types';
import { ArticleType } from '@/entities/Article/model/types/article';
import { TabsItem } from '@/shared/ui/Tabs/Tabs';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string,
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const [searchParams, setSearchParams] = useSearchParams();
    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);
    const setQueryParams = useCallback((key: 'sort' | 'order' | 'search' |
        'type', value: string) => {
        searchParams.set(key, value);
        setSearchParams(searchParams);
    }, [searchParams, setSearchParams]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        dispatch(articlesPageActions.setPage(1));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        setQueryParams('sort', sort);
        debouncedFetchData();
    }, [debouncedFetchData, dispatch, setQueryParams]);
    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        setQueryParams('order', order);
        debouncedFetchData();
    }, [debouncedFetchData, dispatch, setQueryParams]);
    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        setQueryParams('search', search);
        debouncedFetchData();
    }, [debouncedFetchData, dispatch, setQueryParams]);

    const onChangeTab = useCallback((tab: TabsItem) => {
        dispatch(articlesPageActions.setType(tab.value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        setQueryParams('type', tab.value);
        debouncedFetchData();
    }, [debouncedFetchData, dispatch, setQueryParams]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleViewSwitcher
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input value={search} onChange={onChangeSearch} />
            </Card>
            <ArticleTypeTabs onChangeType={onChangeTab} value={type} className={cls.tabs} />
        </div>
    );
});
