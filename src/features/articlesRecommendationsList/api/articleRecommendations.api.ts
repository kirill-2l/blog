import { rtkApi } from '@/shared/api/rtkApi.instance';
import { Article } from '@/entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchArticlesRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                    _expand: 'user',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const useArticlesRecommendationsList = recommendationsApi.useFetchArticlesRecommendationsListQuery;
