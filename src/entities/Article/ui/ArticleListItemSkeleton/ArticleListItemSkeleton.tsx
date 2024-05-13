import { memo } from 'react';
import { Card, Skeleton, VStack } from '@/shared/ui';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from '../ArticleListItem/ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.TILE) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton
                            width={130}
                            height={16}
                        />
                    </div>
                    <Skeleton
                        width={150}
                        height={16}
                        className={cls.title}
                    />
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <VStack gap="8">
                    <Skeleton
                        borderRadius="50%"
                        height={30}
                        width={30}
                    />
                    <Skeleton
                        width={150}
                        height={16}
                        className={cls.username}
                    />
                    <Skeleton
                        width={150}
                        height={16}
                        className={cls.date}
                    />
                </VStack>
                <Skeleton
                    width={250}
                    height={24}
                    className={cls.title}
                />
                <Skeleton
                    height={200}
                    className={cls.img}
                />
                <div className={cls.footer}>
                    <Skeleton
                        height={36}
                        width={200}
                    />
                </div>
            </Card>
        </div>
    );
});
