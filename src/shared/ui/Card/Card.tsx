import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'p_0',
    '8': 'p_8',
    '16': 'p_16',
    '24': 'p_24',
};
const mapBorderToClass: Record<CardBorder, string> = {
    normal: 'border_normal',
    round: 'border_round',
};

export const Card = memo((props: CardProps) => {
    const { className, children, variant = 'normal', border = 'normal', max, padding = '8', ...otherProps } = props;
    const paddingClass = mapPaddingToClass[padding];
    const borderClass = mapBorderToClass[border];
    return (
        <div
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                },
                [className, cls[variant], cls[paddingClass], cls[borderClass]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});
