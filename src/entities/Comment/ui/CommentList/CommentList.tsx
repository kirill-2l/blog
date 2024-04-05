import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { BaseText } from 'shared/ui';
import { IComment } from 'entities/Comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string,
    comments?: IComment[],
    isLoading?: boolean

}

export const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation();
    const {
        className,
        comments,
        isLoading,
    } = props;
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? comments.map((comment) => (
                <CommentCard
                    isLoading={isLoading}
                    className={cls.comment}
                    key={comment.id}
                    comment={comment}
                />
            ))
                : <BaseText text={t('No comments')} />}
        </div>
    );
});
