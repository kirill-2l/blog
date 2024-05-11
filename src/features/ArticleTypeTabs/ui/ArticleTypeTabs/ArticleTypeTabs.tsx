import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Tabs, TabsItem } from '@/shared/ui';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    onChangeType: (tabs: TabsItem) => void;
    value: ArticleType;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, onChangeType, value } = props;
    const { t } = useTranslation();

    const tabTypes: TabsItem[] = useMemo(
        () => [
            {
                value: ArticleType.ALL,
                content: t('All'),
            },
            {
                value: ArticleType.SINCE,
                content: t('Since'),
            },
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabsItem) => {
            onChangeType(tab);
        },
        [onChangeType],
    );

    return (
        <div className={classNames('', {}, [className])}>
            <Tabs tabs={tabTypes} value={value} onTabClick={onTabClick} />
        </div>
    );
});
