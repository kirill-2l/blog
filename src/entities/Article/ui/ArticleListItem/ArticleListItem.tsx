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
    const userInfo = (
        <>
            <Avatar
                src={article.user.avatar}
                size={32}
                alt={article.user.username}
            />
            <BaseText
                bold
                text={article.user.username}
            />
        </>
    );
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
                <Card
                    className={cls.card}
                    border="round"
                >
                    <AppImage
                        fallback={
                            <Skeleton
                                width={200}
                                height={200}
                            />
                        }
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                    />
                    <VStack
                        className={cls.info}
                        gap="4"
                    >
                        <BaseText
                            title={article.title}
                            className={cls.title}
                        />
                        <VStack
                            gap="4"
                            className={cls.footer}
                            max
                        >
                            <HStack
                                justify="between"
                                max
                            >
                                <BaseText
                                    text={article.createdAt}
                                    className={cls.date}
                                />
                                {views}
                            </HStack>
                            <HStack
                                align="center"
                                gap="8"
                            >
                                {userInfo}
                            </HStack>
                        </VStack>
                    </VStack>
                </Card>
            </AppLink>
        );
    }
    return (
        <Card
            padding="24"
            max
            data-testid="ArticleListItem"
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <VStack
                max
                gap="16"
            >
                <HStack
                    gap="8"
                    max
                >
                    {userInfo}
                    <BaseText text={article.createdAt} />
                </HStack>
                <BaseText
                    title={article.title}
                    bold
                />
                <BaseText
                    title={article.subtitle}
                    size="s"
                />
                <AppImage
                    fallback={
                        <Skeleton
                            width="100%"
                            height={250}
                        />
                    }
                    src={article.img}
                    className={cls.img}
                    alt={article.title}
                />
                {textBlock?.paragraphs && (
                    <BaseText
                        className={cls.textBlock}
                        text={textBlock.paragraphs.slice(0, 2).join(' ')}
                    />
                )}
                <HStack
                    max
                    justify="between"
                >
                    <AppLink
                        target={target}
                        to={getRouteArticleDetails(article.id)}
                    >
                        <Button variant="outline">{t('Читать далее...')}</Button>
                    </AppLink>
                    {views}
                </HStack>
            </VStack>
        </Card>
    );
});
