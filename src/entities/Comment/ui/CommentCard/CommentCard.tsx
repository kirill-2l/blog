import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { IComment } from '@/entities/Comment';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { AppLink, BaseText, Skeleton } from '@/shared/ui';
import { TextSize } from '@/shared/ui/BaseText/BaseText';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string,
    comment?: IComment,
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        isLoading,
        comment,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>

                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />

            </div>

        );
    }

    if (!comment) return null;

    return (
        <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment?.user?.avatar && <Avatar src={comment.user.avatar} size={30} />}
                <BaseText
                    className={cls.username}
                    title={comment.user?.username}
                    size={TextSize.M}
                />
            </AppLink>
            <BaseText className={cls.text} text={comment.text} />
        </div>
    );
});
