import { MutableRefObject, useEffect, useRef } from 'react';

interface UseInfiniteScrollProps {
    callback?: () => void,
    triggerRef: MutableRefObject<HTMLElement>,
    wrapperRef: MutableRefObject<HTMLElement>,
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
    const {
        callback,
        triggerRef,
        wrapperRef,
    } = props;

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerElement = triggerRef.current;
        const wrapperElement = wrapperRef.current;
        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
