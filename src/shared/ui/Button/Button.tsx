import { type ButtonHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/libs/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const { className, children, variant = 'outline', square, size = 'm', disabled, ...rest } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
            {...rest}
        >
            {children}
        </button>
    );
});
