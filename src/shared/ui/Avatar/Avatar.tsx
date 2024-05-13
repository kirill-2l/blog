import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '../../libs/classNames/classNames';
import cls from './Avatar.module.scss';
import UserFilledIcon from '../../assets/icons/user-filled.svg';
import { AppImage, Icon, Skeleton } from '../index';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt } = props;
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = (
        <Skeleton
            width={size}
            height={size}
            borderRadius="50%"
        />
    );
    const errorFallback = (
        <Icon
            width={size}
            height={size}
            Svg={UserFilledIcon}
        />
    );

    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            style={styles}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
