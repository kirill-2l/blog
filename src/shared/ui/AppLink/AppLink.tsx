import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";


export enum AppLinksTheme {

}

interface AppLinkProps extends LinkProps{
    className?: string,
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {className, children, to, ...args} = props;
    return (
        <Link
            className={classNames(cls.AppLink)}
            to={to}
            {...args}
        >
            {children}
        </Link>
    );
}

