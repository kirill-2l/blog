import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string,
}

function Navbar({className} : NavbarProps) {
    return (
        <>
            <div className={classNames(cls.navbar)}>
                <div className={cls.links}>
                    <AppLink to={'/'}>Главная</AppLink>
                    <AppLink to={'/about'}>О сайте</AppLink>

                </div>
            </div>
        </>
    );
}

export default Navbar;
