import { memo, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinksTheme;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { className, children, theme = AppLinksTheme.PRIMARY, to, ...args } = props;
    return (
        <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to} {...args}>
            {children}
        </Link>
    );
});
