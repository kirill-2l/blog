import { memo } from 'react';
import { IComment } from '@/entities/Comment';
import { Avatar, AppLink, BaseText, Skeleton, Card, HStack } from '@/shared/ui';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, isLoading, comment } = props;

    if (isLoading) {
        return (
            <Card
                max
                padding="16"
                data-testid="CommentCard.Content"
            >
                <HStack gap="8">
                    <Skeleton
                        width="30"
                        height="30"
                        borderRadius="100%"
                    />
                    <Skeleton
                        width="100"
                        height="30"
                    />
                </HStack>
                <Skeleton
                    width="120"
                    height="30"
                />
            </Card>
        );
    }

    if (!comment) return null;

    return (
        <Card
            max
            padding="16"
            data-testid="CommentCard.Content"
        >
            <AppLink to={getRouteProfile(comment.user.id)}>
                {comment?.user?.avatar && (
                    <HStack gap="8">
                        <Avatar
                            src={comment.user.avatar}
                            size={30}
                        />
                        <BaseText
                            title={comment.user?.username}
                            size="m"
                        />
                    </HStack>
                )}
            </AppLink>
            <BaseText text={comment.text} />
        </Card>
    );
});
