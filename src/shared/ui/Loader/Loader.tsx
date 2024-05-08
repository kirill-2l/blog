import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export enum LoaderTheme {}

export const Loader = ({ className }: LoaderProps) => <div className={classNames(cls.Loader, {}, [className])} />;
