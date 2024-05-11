import { memo, ReactNode } from 'react';
import { type LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children: ReactNode;
    activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { className, children, variant = 'primary', to, activeClassName = '', ...args } = props;
    return (
        <NavLink
            className={({ isActive }) => classNames('', { [activeClassName]: isActive }, [className, cls[variant]])}
            to={to}
            {...args}
        >
            {children}
        </NavLink>
    );
});
