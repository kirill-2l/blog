import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/libs/classNames/classNames';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelector';
import { fetchArticlesList } from '@/pages/ArticlesPage/model/services/fetchArticlesList.ts/fetchArticlesList';
import { useDebounce } from '@/shared/libs/hooks/useDebounce/useDebounce';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { articlesPageActions } from '@/pages/ArticlesPage/model/slice/articlesPage.slice';
import { SortOrder } from '@/shared/types/types';
import { TabsItem } from '@/shared/ui';
import cls from './FiltersContainer.module.scss';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo(({ className }: FiltersContainerProps) => {
    const dispatch = useAppDispatch();
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const [searchParams, setSearchParams] = useSearchParams();
    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);
    const setQueryParams = useCallback(
        (key: 'sort' | 'order' | 'search' | 'type', value: string) => {
            searchParams.set(key, value);
            setSearchParams(searchParams);
        },
        [searchParams, setSearchParams],
    );

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(sort));
            dispatch(articlesPageActions.setPage(1));
            setQueryParams('sort', sort);
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch, setQueryParams],
    );
    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesPageActions.setOrder(order));
            dispatch(articlesPageActions.setPage(1));
            setQueryParams('order', order);
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch, setQueryParams],
    );
    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            setQueryParams('search', search);
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch, setQueryParams],
    );

    const onChangeTab = useCallback(
        (tab: TabsItem) => {
            dispatch(articlesPageActions.setType(tab.value as ArticleType));
            dispatch(articlesPageActions.setPage(1));
            setQueryParams('type', tab.value);
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch, setQueryParams],
    );
    return (
        <div className={classNames('', {}, [className])}>
            <ArticlesFilters
                className={cls.filters}
                sort={sort}
                search={search}
                order={order}
                type={type}
                onChangeSort={onChangeSort}
                onChangeOrder={onChangeOrder}
                onChangeSearch={onChangeSearch}
                onChangeType={onChangeTab}
            />
        </div>
    );
});
