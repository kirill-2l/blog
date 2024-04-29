import {
    memo, MutableRefObject, UIEvent, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import { useInfiniteScroll } from '@/shared/libs/hooks/UseInfiniteScroll/UseInfiniteScroll';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { getScrollPositionByPath, scrollPositionActions } from '@/features/persistScrollPosition';
import { StateSchema } from '@/app/providers/store';
import { useInitialEffect } from '@/shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/libs/hooks/useThrottle/useThrottle';
import cls from './PageWrapper.module.scss';
import { TestProps } from '@/shared/types/testPropType';

interface PageWrapperProps extends TestProps {
    className?: string,
    children: React.ReactNode,
    onScrollEnd?: () => void;
}

export const PageWrapper = memo((props: PageWrapperProps) => {
    const {
        className,
        children,
        onScrollEnd,
        'data-testid': dataTestid = 'Page',
    } = props;

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
        <main
            data-testid={dataTestid}
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.PageWrapper, {}, [className])}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </main>

    );
});
