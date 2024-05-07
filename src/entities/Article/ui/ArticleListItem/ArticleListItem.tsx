import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import {
    AppLink, BaseText, Button, Icon, Skeleton,
} from '@/shared/ui';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import {
    ArticleTextBlockComponent,
} from '@/entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';

interface ArticleListItemProps {
    className?: string,
    article: Article,
    view: ArticleView,
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const {
        className,
        article,
        view,
        target,
    } = props;

    const types = <BaseText text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <BaseText text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} className={cls.icon} />
        </>
    );
    const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    if (view === ArticleView.TILE) {
        return (
            <AppLink
                data-testid="ArticlesListItem"
                target={target}
                to={getRouteArticleDetails(article.id)}
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card>
                    <div className={cls.imgWrapper}>
                        <AppImage
                            fallback={<Skeleton width="100%" height={250} />}
                            src={article.img}
                            alt={article.title}
                            className={cls.img}
                        />
                        <BaseText text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}

                    </div>
                    <BaseText text={article.title} className={cls.title} />
                </Card>
            </AppLink>
        );
    }
    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            data-testid="ArticlesListItem"
        >
            <Card>
                <div className={cls.header}>
                    {/* <Avatar src={article.user.avatar} size={50} alt={article.user.username} /> */}
                    {/* <BaseText text={article.user.username} /> */}
                    <BaseText className={cls.date} text={article.createdAt} />
                </div>
                <BaseText text={article.title} className={cls.title} />
                <div className={cls.header} />
                {types}
                <AppImage
                    fallback={<Skeleton width={200} height={250} />}
                    className={cls.img}
                    src={article.img}
                    alt={article.title}
                />
                {textBlock
                    && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                <div className={cls.footer}>
                    <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                        <Button>{t('Read more')}</Button>
                    </AppLink>
                </div>
                {views}
            </Card>
        </div>
    );
});
