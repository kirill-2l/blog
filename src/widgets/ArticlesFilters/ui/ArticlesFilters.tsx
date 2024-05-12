import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Card, Input, TabsItem, VStack } from '@/shared/ui';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/types';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    search: string;
    order: SortOrder;
    type: ArticleType;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: SortOrder) => void;
    onChangeSearch: (search: string) => void;
    onChangeType: (tab: TabsItem) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const { className, type, search, onChangeSearch, onChangeSort, sort, onChangeType, onChangeOrder, order } = props;

    return (
        <Card
            padding="24"
            className={classNames(cls.ArticlesFilters, {}, [className])}
        >
            <VStack gap="32">
                <Input
                    value={search}
                    onChange={onChangeSearch}
                />
                <ArticleTypeTabs
                    onChangeType={onChangeType}
                    value={type}
                    className={cls.tabs}
                />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
            </VStack>
        </Card>
    );
});
