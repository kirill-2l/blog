import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleViewSwitcher } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from 'pages/ArticlesPage/model/slice/articlesPage.slice';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import {
    fetchArticlesList,
} from 'pages/ArticlesPage/model/services/fetchArticlesList.ts/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelector';

interface ArticlesPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    useInitialEffect(() => {
        dispatch(fetchArticlesList());
    });
    const onChangeView = useCallback((view) => {
        dispatch(articlesPageActions.setView(view));
        dispatch(articlesPageActions.initState());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ArticleViewSwitcher
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    isLoading={isLoading}
                    articles={articles}
                    view={view}
                />

            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
