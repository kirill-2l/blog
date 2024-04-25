import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';

import { ArticleDetails } from '@/entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper } from '@/shared/ui/PageWrapper';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
import {
    ArticleDetailsPageHeader,
} from '@/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticlesRecommendationsList } from '@/features/articlesRecommendationsList';
import {
    ArticleDetailsComments,
} from '@/features/articlesRecommendationsList/ui/ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';

interface ArticleDetailsPageProps {
    className?: string,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    const reducers: ReducersList = {
        articleDetailsPage: articleDetailsPageReducer,
    };

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <PageWrapper className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticlesRecommendationsList />
                <ArticleDetailsComments id={id} />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
