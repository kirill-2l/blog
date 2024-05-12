import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slice/articlesPage.slice';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/libs/hooks/useInitialEffect/useInitialEffect';
import { PageWrapper } from '@/shared/ui';
import { fetchNextArticlesPage } from '@/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '@/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { ArticlesList } from '@/pages/ArticlesPage/ui/ArticlesList/ArticlesList';
import { StickyContentLayout } from '@/shared/layouts';
import cls from './ArticlesPage.module.scss';
import { ViewSelectorContainer } from '@/pages/ArticlesPage/ui/ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '@/pages/ArticlesPage/ui/FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
    className?: string;
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
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <StickyContentLayout
                left={<ViewSelectorContainer />}
                right={<FiltersContainer />}
                content={
                    <PageWrapper
                        data-testid="ArticlesPage"
                        onScrollEnd={onLoadNextPart}
                        className={classNames(cls.ArticlesPage, {}, [className])}
                    >
                        <ArticlesList />
                    </PageWrapper>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
