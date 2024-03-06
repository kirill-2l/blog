import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
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
            />
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinksTheme.SECONDARY}
                        to={RoutePath.main}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>Главная</span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinksTheme.SECONDARY}
                        to={RoutePath.about}
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>О сайте</span>
                    </AppLink>
                </div>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
};
