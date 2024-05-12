import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Card } from '@/shared/ui';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '@/shared/ui/Stack/Flex/Flex';

export interface TabsItem {
    value: string;
    content: ReactNode;
}

export interface TabsProps {
    className?: string;
    tabs: TabsItem[];
    value: string;
    direction?: FlexDirection;
    onTabClick?: (tab: TabsItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, direction = 'row', onTabClick } = props;
    const clickHandle = useCallback(
        (tab: TabsItem) => () => {
            onTabClick?.(tab);
        },
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            gap="16"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                    variant={tab.value === value ? 'light' : 'normal'}
                    border="round"
                >
                    {tab.content}
                </Card>
            ))}
        </Flex>
    );
});
