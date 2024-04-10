import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articlesPageReducer,
    getArticles,
} from 'pages/ArticlesPage/model/slice/articlesPage.slice';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelector';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import {
    fetchNextArticlesPage,
} from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    initArticlesPage,
} from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
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

                <ArticleList
                    className={cls.list}
                    isLoading={isLoading}
                    articles={articles}
                    view={view}
                />

            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
