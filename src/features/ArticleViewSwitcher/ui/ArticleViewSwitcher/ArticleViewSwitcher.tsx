import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { ArticleView } from '@/entities/Article';
import BurgerIcon from '@/shared/assets/icons/burger.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { Card, HStack, Icon } from '@/shared/ui';
import cls from './ArticleViewSwitcher.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (viewType: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: BurgerIcon,
    },
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
];

export const ArticleViewSwitcher = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (view: ArticleView) => () => {
        onViewClick?.(view);
    };

    return (
        <Card
            border="round"
            className={classNames(cls.ArticleViewSelector, {}, [className])}
        >
            <HStack gap="8">
                {viewTypes.map((viewType) => (
                    <Icon
                        key={viewType.view}
                        clickable
                        onClick={onClick(viewType.view)}
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                ))}
            </HStack>
        </Card>
    );
});
