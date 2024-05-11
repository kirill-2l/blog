import { type ButtonHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/libs/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    OUTLINE_DARK = 'outline-dark',
    OUTLINE_RED = 'outline-red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

/**
 * @deprecated
 */
export const Button = memo((props: ButtonProps) => {
    const { className, children, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, disabled, ...rest } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button className={classNames(cls.Button, mods, [className])} {...rest}>
            {children}
        </button>
    );
});
