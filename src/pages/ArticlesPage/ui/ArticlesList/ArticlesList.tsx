import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/libs/classNames/classNames';
import { getArticles } from '@/pages/ArticlesPage/model/slice/articlesPage.slice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelector';
import { BaseText } from '@/shared/ui';

interface ArticlesInfiniteListProps {
    className?: string;
}

export const ArticlesList = memo(({ className }: ArticlesInfiniteListProps) => {
    const { t } = useTranslation();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    if (error) {
        return <BaseText text={t('page error')} />;
    }
    return (
        <ArticleList
            className={classNames('', {}, [className])}
            isLoading={isLoading}
            articles={articles}
            view={view}
        />
    );
});
