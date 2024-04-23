import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string,
    onClick?: () => void,
}

export const Overlay = memo(({
    className,
    onClick,
}: OverlayProps) => (
    <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
));
