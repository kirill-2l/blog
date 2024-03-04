import { classNames } from 'shared/lib/classNames/classNames';
import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinksTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinksTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className, children, theme = AppLinksTheme.PRIMARY, to, ...args
    } = props;
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...args}
        >
            {children}
        </Link>
    );
};
