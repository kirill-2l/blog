import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchArticleById } from '@/entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { BaseText, Skeleton, AppImage } from '@/shared/ui';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from '@/entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '@/entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '@/entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { useInitialEffect } from '@/shared/libs/hooks/useInitialEffect/useInitialEffect';
import { articleDetailsReducer } from '../../model/slice/articleDetails.slice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            default:
                return null;
        }
    }, []);
    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton
                    className={cls.skeleton}
                    width={300}
                    height={32}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={600}
                    height={24}
                />
                <Skeleton
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
                <Skeleton
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
            </>
        );
    } else if (error) {
        content = (
            <BaseText
                align="center"
                text={t('Error while loading article')}
            />
        );
    } else {
        content = (
            <>
                <BaseText
                    title={article?.title}
                    size="l"
                    bold
                />
                <BaseText title={article?.subtitle} />
                <AppImage
                    fallback={
                        <Skeleton
                            width="100%"
                            height={420}
                            borderRadius="16px"
                        />
                    }
                    src={article?.img}
                    className={cls.img}
                />
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            {content}
        </DynamicModuleLoader>
    );
});
