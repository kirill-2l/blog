import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Article, ArticleView } from '@/entities/Article/model/types/article';
import { ArticleListItem } from '@/entities/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';
import { BaseText, HStack } from '@/shared/ui';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { articles, view = ArticleView.LIST, isLoading, target, className } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            target={target}
            article={article}
            view={view}
            key={article.id}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <BaseText
                size="l"
                title={t('Nothing found')}
            />
        );
    }

    return (
        <HStack
            wrap="wrap"
            gap="16"
            className={classNames('', {})}
            data-testid="ArticlesList"
        >
            {articles.length ? articles.map(renderArticle) : null}
            {isLoading && (
                <HStack
                    wrap="wrap"
                    gap="16"
                    className={classNames('', {}, [className, cls[view]])}
                >
                    {/* eslint-disable react/no-array-index-key */}

                    {new Array(view === ArticleView.LIST ? 3 : 9).fill('').map((item, i) => (
                        <ArticleListItemSkeleton
                            view={view}
                            key={i}
                        />
                    ))}
                </HStack>
            )}
        </HStack>
    );
});
