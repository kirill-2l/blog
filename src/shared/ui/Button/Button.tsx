import React, { type ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactElement } from 'react';
import { classNames, Mods } from '@/shared/libs/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    color?: ButtonColor;
    disabled?: boolean;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        className,
        children,
        variant = 'outline',
        square,
        size = 'm',
        color = 'normal',
        disabled,
        addonLeft,
        addonRight,
        ...rest
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.withAddon]: Boolean(addonLeft || addonRight),
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size], cls[color]])}
            {...rest}
            ref={ref}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});
