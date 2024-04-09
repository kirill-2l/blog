import { classNames } from 'shared/libs/classNames/classNames';
import {
    memo, MutableRefObject, UIEvent, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/libs/hooks/UseInfiniteScroll/UseInfiniteScroll';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { getScrollPositionByPath, scrollPositionActions } from 'features/persistScrollPosition';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/store';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/libs/hooks/useThrottle/useThrottle';
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
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollPositionByPath(state, pathname),
    );
    useInfiniteScroll({
        wrapperRef,
        triggerRef,

        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollPositionActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <section
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.PageWrapper, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>

    );
});
