import { rtkApi } from 'shared/api/rtkApi.instance';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchArticlesRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const useArticlesRecommendationsList = recommendationsApi
    .useFetchArticlesRecommendationsListQuery;
