import { classNames } from 'shared/libs/classNames/classNames';
import { memo, MutableRefObject, useRef } from 'react';
import { useInfiniteScroll } from 'shared/libs/hooks/UseInfiniteScroll/UseInfiniteScroll';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
    className?: string,
    children: React.ReactNode,
    onScrollEnd?: () => void;
}

export const PageWrapper = memo(({
    className,
    children,
    onScrollEnd,
}: PageWrapperProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    useInfiniteScroll({
        wrapperRef,
        triggerRef,

        callback: onScrollEnd,
    });
    return (
        <section ref={wrapperRef} className={classNames(cls.PageWrapper, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>

    );
});
