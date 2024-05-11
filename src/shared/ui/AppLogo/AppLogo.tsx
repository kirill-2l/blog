import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '@/shared/ui/Stack';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => (
        <HStack max justify="center" className={classNames(cls.appLogoWrapper, {}, [className])}>
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <div className={classNames(cls.AppLogo, {}, [className])}>Blog</div>
        </HStack>
    ));
