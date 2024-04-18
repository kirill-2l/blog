import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { BaseText } from 'shared/ui';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useDispatch, useSelector } from 'react-redux';
import {
    getArticlesComments,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsComments.slice';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import {
    addCommentForArticle,
} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
    className?: string,
    id: string
}

export const ArticleDetailsComments = memo(({
    className,
    id,
}: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const comments = useSelector(getArticlesComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    return (
        <div className={classNames('', {}, [className])}>
            <BaseText title={t('Comments')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </div>
    );
});
