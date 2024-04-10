import { MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number = 300) {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback();
        }, delay);
    }, [callback, delay]);
}
