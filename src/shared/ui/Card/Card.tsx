import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'p_0',
    '8': 'p_8',
    '16': 'p_16',
    '24': 'p_24',
};

export const Card = memo((props: CardProps) => {
    const { className, children, variant = 'normal', max, padding = '8', ...otherProps } = props;
    const paddingClass = mapPaddingToClass[padding];
    return (
        <div
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                },
                [className, cls[variant], cls[paddingClass]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});
