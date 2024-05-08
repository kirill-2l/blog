import { rtkApi } from '@/shared/api/rtkApi.instance';
import { Rating } from '@/entities/Rating';

interface FetchArticleRatingParams {
    userId: string;
    articleId: string;
}

interface SaveArticleRatingParams {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchArticleRating: build.query<Rating[], FetchArticleRatingParams>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        saveArticleRating: build.mutation<void, SaveArticleRatingParams>({
            query: (params) => ({
                url: '/article-ratings',
                method: 'POST',
                body: params,
            }),
        }),
    }),
    overrideExisting: false,
});

export const useFetchArticleRating = articleRatingApi.useFetchArticleRatingQuery;
export const useSaveArticleRating = articleRatingApi.useSaveArticleRatingMutation;
