import { useTranslation } from 'react-i18next';
import { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star-20-20.svg';
import { Icon } from '@/shared/ui';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

export const StarRating = memo((props: StarRatingProps) => {
    const {
        selectedStars,
        onSelect,
        className,
        size = 30,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars || 0);
    const [isSelected, setIsSelected] = useState(Boolean(currentStarsCount));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };
    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {[1, 2, 3, 4, 5].map((starNumber) => (
                <Icon
                    key={starNumber}
                    className={classNames(cls.starIcon, {
                        [cls.hovered]: currentStarsCount >= starNumber,
                        [cls.normal]: currentStarsCount <= starNumber,
                        [cls.isSelected]: isSelected,
                    }, [])}
                    Svg={StarIcon}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
