import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher/LanguageSwitcher';
import { getSidebarItems } from '@/widgets/Sidebar/model/getSidebarItems/getSidebarItems';
import { VStack , AppLogo } from '@/shared/ui';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItems = useSelector(getSidebarItems);
    return (
        <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <AppLogo className={cls.appLogo} />

            <VStack gap="16" align="start" className={cls.items}>
                {sidebarItems.map((i) => (
                    <SidebarItem key={i.path} item={i} collapsed={collapsed} />
                ))}
            </VStack>

            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.themeSwitcher} />
                <LanguageSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
