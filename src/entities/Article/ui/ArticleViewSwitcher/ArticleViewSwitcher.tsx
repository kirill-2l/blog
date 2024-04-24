import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { ArticleView } from '@/entities/Article/model/types/article';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TileIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, Icon } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './ArticleViewSwitcher.module.scss';

interface ArticleViewSelectorProps {
    className?: string,
    view?: ArticleView,
    onViewClick?: (viewType: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },

];

export const ArticleViewSwitcher = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClick = (view: ArticleView) => () => {
        onViewClick?.(view);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {
                viewTypes.map((viewType) => (
                    <Button
                        key={viewType.view}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                    >
                        <Icon
                            Svg={viewType.icon}
                            className={classNames('', { [cls.selected]: viewType.view === view })}
                        />
                    </Button>
                ))
            }
        </div>
    );
});
