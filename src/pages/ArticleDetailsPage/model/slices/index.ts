import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import {
    articleDetailsCommentsReducer,
} from '@/pages/ArticleDetailsPage/model/slices/articleDetailsComments.slice';
import {
    articleDetailsPageRecommendationsReducer,
} from '@/pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendation.slice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
});
