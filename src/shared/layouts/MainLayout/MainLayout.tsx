import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactNode;
    content: ReactNode;
    sidebar: ReactNode;
    toolbar?: ReactNode;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, sidebar, header, toolbar, content } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightSidebar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
});
