import { useTranslation } from 'react-i18next';
import React, { FunctionComponent, memo, VFC } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string,
    Svg: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean
}

export const Icon = memo(({
    className,
    inverted,
    Svg,
}: IconProps) => (
    <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
));
