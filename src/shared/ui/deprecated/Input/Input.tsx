import React, { type InputHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Input.module.scss';

export enum InputTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    OUTLINE_DARK = 'outline-dark',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted',
}

export enum InputSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'> {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, type = 'text', readonly = false, ...rest } = props;

    const modes = {
        [cls.readonly]: readonly,
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Input, modes, [className])}>
            <input
                type={type}
                className={cls.input}
                onChange={onChangeHandler}
                value={value}
                readOnly={readonly}
                {...rest}
            />
        </div>
    );
});
