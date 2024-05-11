import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '@/shared/ui';

interface AppLogoProps {
    className?: string;
    size?: string;
}

export const AppLogo = memo(({ className, size = '24px' }: AppLogoProps) => (
    <HStack
        max
        justify="center"
        className={classNames(cls.appLogoWrapper, {}, [className])}
    >
        <div className={cls.gradientBig} />
        <div className={cls.gradientSmall} />
        <div
            className={classNames(cls.AppLogo, {}, [className])}
            style={{ fontSize: size }}
        >
            Blog
        </div>
    </HStack>
));
