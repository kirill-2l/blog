import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { BaseText, Button } from 'shared/ui';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getArticlesComments,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsComments.slice';
import { useDispatch, useSelector } from 'react-redux';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/comments';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import {
    addCommentForArticle,
} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import {
    getArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendation.slice';
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/recommendations';
import { TextSize } from 'shared/ui/BaseText/BaseText';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import {
    fetchArticleRecommendations,
}
    from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticlesComments.selectAll);
    const dispatch = useDispatch();
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);
    const reducers: ReducersList = {
        articleDetailsPage: articleDetailsPageReducer,
    };
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

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
                <Button onClick={onBackToList}>{t('get back')}</Button>
                <ArticleDetails id={id} />
                <BaseText
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Recommendations')}
                />
                <ArticleList
                    target="_blank"
                    view={ArticleView.TILE}
                    className={cls.recommendations}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                />
                <BaseText className={cls.commentTitle} title={t('Comments')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
