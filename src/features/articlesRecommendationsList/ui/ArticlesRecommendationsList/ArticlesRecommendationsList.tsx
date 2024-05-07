import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { BaseText } from '@/shared/ui';
import { TextSize } from '@/shared/ui/BaseText';
import { ArticleList, ArticleView } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import {
    useArticlesRecommendationsList,
} from '@/features/articlesRecommendationsList/api/articleRecommendations.api';

interface ArticlesRecommendationsProps {
    className?: string,
}

export const ArticlesRecommendationsList = memo(({ className }: ArticlesRecommendationsProps) => {
    const { t } = useTranslation();
    const {
        isLoading,
        data: recommendations,
        error,
    } = useArticlesRecommendationsList(3);
    if (isLoading || error || !recommendations) return null;

    return (
        <VStack
            gap="8"
            className={classNames('', {}, [className])}
            data-testid="ArticlesRecommendationsList"
        >
            <BaseText
                size={TextSize.L}
                title={t('Recommendations')}
            />

            <ArticleList
                target="_blank"
                view={ArticleView.TILE}
                articles={recommendations}
                isLoading={isLoading}
            />
        </VStack>
    );
});
