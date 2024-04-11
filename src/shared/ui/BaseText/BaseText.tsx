import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import cls from './BaseText.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'text-right',
    LEFT = 'text-left',
    CENTER = 'text-center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

export interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
    align?: TextAlign,
    size?: TextSize,
}

export const BaseText = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const modes = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, modes, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
