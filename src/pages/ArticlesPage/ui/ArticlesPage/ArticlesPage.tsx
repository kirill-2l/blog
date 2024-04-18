import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPage.slice';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import {
    fetchNextArticlesPage,
} from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    initArticlesPage,
} from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import {
    ArticlesInfiniteList,
} from 'pages/ArticlesPage/ui/ArticlesInfiniteList/ArticlesInfiniteList';

interface ArticlesPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper onScrollEnd={onLoadNextPart} className={classNames('', {}, [className])}>
                <ArticlesPageFilters />
                <ArticlesInfiniteList />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
