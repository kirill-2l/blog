import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Article, ArticleView } from '@/entities/Article/model/types/article';
import { ArticleListItem } from '@/entities/Article/ui/ArticleListItem/ArticleListItem';
import {
    ArticleListItemSkeleton,
} from '@/entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';
import { BaseText } from '@/shared/ui';
import { TextSize } from '@/shared/ui/BaseText/BaseText';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        articles,
        view = ArticleView.LIST,
        isLoading,
        target,
        className,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem target={target} article={article} view={view} key={article.id} />
    );

    if (!isLoading && !articles.length) {
        return (
            <BaseText
                size={TextSize.L}
                title={t('Nothing found')}
            />
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
            {isLoading && (
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
            )}
        </div>

    );
});
