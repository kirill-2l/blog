import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { AppLink, BaseText, Button, Icon, Skeleton, Card, AppImage, HStack, VStack, Avatar } from '@/shared/ui';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { getRouteArticleDetails } from '@/shared/const/router';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const { className, article, view, target } = props;

    const types = <BaseText text={article.type.join(', ')} />;
    const views = (
        <HStack
            gap="8"
            align="center"
        >
            <Icon Svg={EyeIcon} />
            <BaseText text={String(article.views)} />
        </HStack>
    );
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    if (view === ArticleView.TILE) {
        return (
            <AppLink
                data-testid="ArticlesListItem"
                target={target}
                to={getRouteArticleDetails(article.id)}
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card>
                    <AppImage
                        fallback={
                            <Skeleton
                                width="100%"
                                height={250}
                            />
                        }
                        src={article.img}
                        alt={article.title}
                    />
                    <BaseText text={article.createdAt} />
                    <div>
                        {types}
                        {views}
                    </div>
                    <BaseText text={article.title} />
                </Card>
            </AppLink>
        );
    }
    return (
        <Card
            padding="24"
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            data-testid="ArticlesListItem"
            max
        >
            <VStack gap="8">
                <HStack
                    gap="8"
                    align="center"
                >
                    <Avatar
                        src={article.user.avatar}
                        size={50}
                        alt={article.user.username}
                    />
                    <BaseText
                        bold
                        text={article.user.username}
                    />
                    <BaseText text={article.createdAt} />
                </HStack>
                <BaseText
                    size="l"
                    text={article.title}
                    bold
                />
                <BaseText
                    text={article.subtitle}
                    bold
                />
                <AppImage
                    fallback={
                        <Skeleton
                            width={200}
                            height={250}
                        />
                    }
                    className={cls.img}
                    src={article.img}
                    alt={article.title}
                />
                <HStack
                    justify="between"
                    align="center"
                    max
                >
                    <AppLink
                        target={target}
                        to={getRouteArticleDetails(article.id)}
                    >
                        <Button>{t('Read more')}</Button>
                    </AppLink>
                    {views}
                </HStack>
                {textBlock?.paragraphs && (
                    <BaseText
                        className={cls.textBlock}
                        text={textBlock.paragraphs.slice(0, 2).join(' ')}
                    />
                )}
            </VStack>
        </Card>
    );
});
