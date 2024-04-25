import React, { FunctionComponent, memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string,
    Svg: FunctionComponent<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean,
}

export const Icon = memo(({
    className,
    inverted,
    Svg,
    ...other
}: IconProps) => (
    <Svg {...other} className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
));
