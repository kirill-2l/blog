import { memo } from 'react';
import { Icon } from '@/shared/ui';
import CircleUpIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollTopButtonProps {
    className?: string;
}

export const ScrollTopButton = memo(({ className }: ScrollTopButtonProps) => {
    const onClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <Icon
            clickable
            onClick={onClick}
            Svg={CircleUpIcon}
            className={className}
        />
    );
});
