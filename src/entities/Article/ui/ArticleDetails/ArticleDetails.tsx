import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchArticleById,
} from '@/entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { BaseText, Icon } from '@/shared/ui';
import { TextAlign, TextSize } from '@/shared/ui/BaseText';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article/model/types/article';
import {
    ArticleCodeBlockComponent,
} from '@/entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    ArticleTextBlockComponent,
} from '@/entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    ArticleImageBlockComponent,
} from '@/entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { useInitialEffect } from '@/shared/libs/hooks/useInitialEffect/useInitialEffect';
import { HStack } from '@/shared/ui/Stack';
import { articleDetailsReducer } from '../../model/slice/articleDetails.slice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string,
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
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
                align={TextAlign.CENTER}
                text={t('Error while loading article')}
            />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max data-testid="ArticlesDetail.Info">
                    <Avatar
                        size={200}
                        className={cls.avatar}
                        src={article?.img}
                    />

                    <BaseText
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                </HStack>
                <HStack gap="8">
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <BaseText text={String(article?.views)} />
                </HStack>
                <HStack gap="8">
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <BaseText text={article?.createdAt} />
                </HStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {content}
        </DynamicModuleLoader>
    );
});
