import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import cls from './Tabs.module.scss';

export interface TabsItem {
    value: string,
    content: ReactNode
}

export interface TabsProps {
    className?: string,
    tabs: TabsItem[],
    value: string,
    onTabClick?: (tab: TabsItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;
    const clickHandle = useCallback((tab: TabsItem) => () => {
        onTabClick?.(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                >
                    {tab.content}
                </Card>
            ))}

        </div>
    );
});
