import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.navbar)}>

            <div className={cls.links}>
                <AppLink theme={AppLinksTheme.SECONDARY} to="/">Главная</AppLink>
                <AppLink theme={AppLinksTheme.SECONDARY} to="/about">О сайте</AppLink>

            </div>
        </div>
    );
}

export default Navbar;
