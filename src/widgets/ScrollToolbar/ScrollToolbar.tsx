import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { ScrollTopButton } from '@/features/ScrollTopButton';
import { VStack } from '@/shared/ui';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo(({ className }: ScrollToolbarProps) => {
    const { t } = useTranslation();
    return (
        <VStack
            align="center"
            justify="center"
            className={classNames(cls.ScrollToolbar, {}, [className])}
            max
        >
            <ScrollTopButton />
        </VStack>
    );
});
