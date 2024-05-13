import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';

import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper, VStack } from '@/shared/ui';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
import { ArticlesRecommendationsList } from '@/features/articlesRecommendationsList';
import { ArticleDetailsComments } from '@/features/articlesRecommendationsList/ui/ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';
import { StickyContentLayout } from '@/shared/layouts';
import { ArticleDetailsInfoContainer } from '@/pages/ArticleDetailsPage/ui/ArticleDetailsInfoContainer/ArticleDetailsInfoContainer';
import { DetailsContainer } from '@/pages/ArticleDetailsPage/ui/DetailsContainer/DetailsContainer';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    const reducers: ReducersList = {
        articleDetailsPage: articleDetailsPageReducer,
    };

    if (!id) {
        return <div className={classNames('', {}, [className])}>{t('Article not found')}</div>;
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <StickyContentLayout
                content={
                    <PageWrapper className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                        <VStack
                            gap="16"
                            max
                        >
                            <DetailsContainer />
                            <ArticleRating articleId={id} />
                            <ArticlesRecommendationsList />
                            <ArticleDetailsComments id={id} />
                        </VStack>
                    </PageWrapper>
                }
                right={<ArticleDetailsInfoContainer />}
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
