import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinksTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string,
}

function Navbar({className} : NavbarProps) {
    return (
        <>
            <div className={classNames(cls.navbar)}>
                <div className={cls.links}>
                    <AppLink theme={AppLinksTheme.SECONDARY} to={'/'}>Главная</AppLink>
                    <AppLink theme={AppLinksTheme.SECONDARY} to={'/about'}>О сайте</AppLink>

                </div>
            </div>
        </>
    );
}

export default Navbar;
