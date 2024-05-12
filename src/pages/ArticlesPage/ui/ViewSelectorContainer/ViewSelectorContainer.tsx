import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './ViewSelectorContainer.module.scss';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { getArticlesPageView } from '@/pages/ArticlesPage/model/selectors/articlesPageSelector';
import { ArticleView } from '@/entities/Article';
import { articlesPageActions } from '@/pages/ArticlesPage/model/slice/articlesPage.slice';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(({ className }: ViewSelectorContainerProps) => {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
            dispatch(articlesPageActions.setPage(1));
        },
        [dispatch],
    );
    return (
        <div className={classNames(cls.ViewSelectorContainer, {}, [className])}>
            <ArticleViewSwitcher
                view={view}
                onViewClick={onChangeView}
            />
        </div>
    );
});
