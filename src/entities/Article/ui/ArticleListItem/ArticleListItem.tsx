import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, HTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import {
    AppLink, BaseText, Button, Icon,
} from '@/shared/ui';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import {
    ArticleTextBlockComponent,
} from '@/entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from '@/app/providers/ThemeProvider/router/config/routeConfig';
import cls from './ArticleListItem.module.scss';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';

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
                target={target}
                to={RoutePath.article_detail + article.id}
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card>
                    <div className={cls.imgWrapper}>
                        <img src={article.img} alt={article.title} className={cls.img} />
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
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.header}>
                    {/* <Avatar src={article.user.avatar} size={50} alt={article.user.username} /> */}
                    {/* <BaseText text={article.user.username} /> */}
                    <BaseText className={cls.date} text={article.createdAt} />
                </div>
                <BaseText text={article.title} className={cls.title} />
                <div className={cls.header} />
                {types}
                <img className={cls.img} src={article.img} alt={article.title} />
                {textBlock
                    && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                <div className={cls.footer}>
                    <AppLink target={target} to={RoutePath.article_detail + article.id}>
                        <Button>{t('Read more')}</Button>
                    </AppLink>
                </div>
                {views}
            </Card>
        </div>
    );
});
