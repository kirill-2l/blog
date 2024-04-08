import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleView } from 'entities/Article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import {
    ArticleListItemSkeleton,
} from 'entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        articles,
        view = ArticleView.LIST,
        isLoading,
        className,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {/* eslint-disable react/no-array-index-key */}

                {
                    new Array(view === ArticleView.LIST ? 3 : 9).fill('')
                        .map((item, i) => (
                            <ArticleListItemSkeleton
                                view={view}
                                key={i}
                            />
                        ))
                }
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} key={article.id} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
        </div>
    );
});
