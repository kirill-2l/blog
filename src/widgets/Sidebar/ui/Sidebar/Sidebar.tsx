import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher/LanguageSwitcher';
import { getSidebarItems } from '@/widgets/Sidebar/model/getSidebarItems/getSidebarItems';
import { VStack, AppLogo, Icon } from '@/shared/ui';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItems = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <AppLogo
                size={collapsed ? '20px' : undefined}
                className={cls.appLogo}
            />

            <VStack
                role="navigation"
                gap="8"
                className={cls.items}
            >
                {sidebarItems.map((i) => (
                    <SidebarItem
                        key={i.path}
                        item={i}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
            <Icon
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                Svg={ArrowIcon}
                clickable
            />
            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.themeSwitcher} />
                <LanguageSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </aside>
    );
});
