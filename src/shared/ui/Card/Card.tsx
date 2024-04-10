import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributes, memo } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children?: React.ReactNode,
    theme?: CardTheme
}

export const Card = memo(({
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
}: CardProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </div>
    );
});
