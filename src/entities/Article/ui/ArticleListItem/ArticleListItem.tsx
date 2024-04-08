import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { BaseText, Button, Icon } from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import {
    ArticleTextBlockComponent,
} from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
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
    view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const {
        className,
        article,
        view,
    } = props;
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_detail + article.id);
    }, [article.id, navigate]);

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
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card onClick={onOpenArticle}>
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
            </div>
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
                    <Button onClick={onOpenArticle}>{t('Read more')}</Button>
                </div>
                {views}
            </Card>
        </div>
    );
});