import { classNames } from 'shared/libs/classNames/classNames';
import React, { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { getSidebarItems } from 'widgets/Sidebar/model/getSidebarItems/getSidebarItems';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItems = useSelector(getSidebarItems);
    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >

            <Button
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                onClick={() => setCollapsed((prev) => !prev)}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <VStack gap="16" align="start" className={cls.items}>
                {sidebarItems.map((i) => (
                    <SidebarItem
                        key={i.path}
                        item={i}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </aside>
    );
});
