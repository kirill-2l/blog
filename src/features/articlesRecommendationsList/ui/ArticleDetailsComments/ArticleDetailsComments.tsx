import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { BaseText, VStack } from '@/shared/ui';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { getArticlesComments } from '@/pages/ArticleDetailsPage/model/slices/articleDetailsComments.slice';
import { getArticleCommentsIsLoading } from '@/pages/ArticleDetailsPage/model/selectors/comments';
import { addCommentForArticle } from '@/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { useInitialEffect } from '@/shared/libs/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticlesComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    return (
        <VStack
            max
            gap="8"
        >
            <BaseText title={t('Comments')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </VStack>
    );
});
