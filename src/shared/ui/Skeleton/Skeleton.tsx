import { classNames } from 'shared/libs/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string,
    height?: number | string;
    width?: number | string;
    borderRadius?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        borderRadius,
        height,
        width,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,

    };

    return (
        <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />

    );
});
