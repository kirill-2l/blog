import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from '@/features/articleRating/ui/ArticleRating/ArticleRating';
import { Skeleton } from '@/shared/ui';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={160} />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
