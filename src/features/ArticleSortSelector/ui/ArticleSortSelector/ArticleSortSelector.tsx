import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticlePageSelectorProps {
    className?: string,
    sort: ArticleSortField,
    order: SortOrder,
    onChangeSort: (sort: ArticleSortField) => void,
    onChangeOrder: (order: SortOrder) => void,

}

export const ArticleSortSelector = memo((props: ArticlePageSelectorProps) => {
    const { t } = useTranslation();
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props;
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('Ascending'),
        },
        {
            value: 'desc',
            content: t('Descending'),
        },
    ], [t]);
    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [{
        value: ArticleSortField.CREATED,
        content: t('By created date'),
    },
    {
        value: ArticleSortField.TITLE,
        content: t('By name'),
    },
    {
        value: ArticleSortField.VIEWS,
        content: t('By views count'),
    }], [t]);

    return (
        <div className={classNames(cls.ArticlePageSelector, {}, [className])}>
            <Select
                label={t('Sort by')}
                onChange={onChangeSort}
                options={sortOptions}
                value={sort}
            />
            <Select
                onChange={onChangeOrder}
                label={t('Sort by')}
                value={order}
                options={orderOptions}
            />
        </div>
    );
});
