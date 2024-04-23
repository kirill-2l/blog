import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import { useNotifications } from 'entities/Notification/api/notification.api';
import { VStack } from 'shared/ui/Stack';
import { NotificationItem } from 'entities/Notification/ui/NotificationItem/NotificationItem';
import { Skeleton } from 'shared/ui';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string,
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const {
        data,
        isLoading,
    } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" borderRadius="8px" height="80px" />
                <Skeleton width="100%" borderRadius="8px" height="80px" />
                <Skeleton width="100%" borderRadius="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack max gap="16" className={classNames(cls.NotificationList, {}, [className])}>
            {data && data.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    item={notification}
                />
            ))}
        </VStack>
    );
});
