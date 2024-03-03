import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";


export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinksTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {className, children, theme = AppLinksTheme.PRIMARY

        , to, ...args} = props;
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...args}
        >
            {children}
        </Link>
    );
}

