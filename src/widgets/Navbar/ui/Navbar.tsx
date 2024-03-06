import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.navbar)} />
    );
}

export default Navbar;
