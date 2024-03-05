import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string,
}

export enum LoaderTheme {

}

export const Loader = ({className}: LoaderProps) => (
    <div className={classNames(cls.Loader, {}, [className])}/>
);
