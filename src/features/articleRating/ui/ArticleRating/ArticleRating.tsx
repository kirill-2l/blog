import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import {
    useFetchArticleRating,
    useSaveArticleRating,
} from '@/features/articleRating/api/articleRating.api';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui';

export interface ArticleRatingProps {
    className?: string,
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { t } = useTranslation();
    const {
        articleId,
        className,
    } = props;

    const userData = useSelector(getUserAuthData);

    const {
        data,
        isLoading,
    } = useFetchArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [saveArticleMutation, {
        isLoading: isSaveLoading,
    }] = useSaveArticleRating();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            saveArticleMutation({
                userId: userData?.id || '',
                rate: starsCount,
                feedback,
                articleId,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, saveArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);
    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return (
            <Skeleton width="100%" height={120} />
        );
    }

    const rating = data?.[0];

    return (
        <div className={classNames('', {}, [className])}>
            <RatingCard
                title="Review article"
                feedbackTitle="Type your review"
                onAccept={onAccept}
                onCancel={onCancel}
                hasFeedback
                rate={rating?.rate}
            />
        </div>
    );
});

export default ArticleRating;
