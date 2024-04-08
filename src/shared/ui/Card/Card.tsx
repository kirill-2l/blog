import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributes, memo } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children?: React.ReactNode,
}

export const Card = memo(({
    className,
    children,
    ...otherProps
}: CardProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
});
