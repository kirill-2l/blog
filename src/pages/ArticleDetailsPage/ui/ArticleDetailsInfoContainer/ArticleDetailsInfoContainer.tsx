import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './ArticleDetailsInfoContainer.module.scss';
import { ArticleDetailsInfo } from '@/pages/ArticleDetailsPage/ui/ArticleDetailsInfo/ArticleDetailsInfo';
import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';

interface ArticleDetailnfoContainerProps {
    className?: string;
}

export const ArticleDetailsInfoContainer = memo(({ className }: ArticleDetailnfoContainerProps) => {
    const article = useSelector(getArticleDetailsData);
    console.log(article);
    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }

    return (
        <div className={classNames(cls.ArticleDetailnfoContainer, {}, [className])}>
            <ArticleDetailsInfo
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
                onEdit={onEditArticle}
            />
        </div>
    );
});
