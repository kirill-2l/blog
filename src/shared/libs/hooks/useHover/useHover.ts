import { useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

export const useHover = () => {
    const [isHover, setIsHover] = useState(false);
    const onMouseEnter = () => {
        setIsHover(true);
    };
    const onMouseLeave = () => {
        setIsHover(false);
    };

    return useMemo<UseHoverResult>(
        () => [
            isHover,
            {
                onMouseEnter,
                onMouseLeave,
            },
        ],
        [isHover],
    );
};
