import {
    ArticleDetailsRecommendationsSchema,
} from './articleDetailsRecommendations.schema';

import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema,
    recommendations: ArticleDetailsRecommendationsSchema
}
