import { classNames } from 'shared/lib/classNames/classNames';
import React, { type InputHTMLAttributes, type FC, memo } from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    OUTLINE_DARK = 'outline-dark',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted'
}

export enum InputSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string,
    value?: string,
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        ...rest
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Input, {}, [className])} {...rest}>
            <input type={type} className={cls.input} onChange={onChangeHandler} />
        </div>
    );
});
