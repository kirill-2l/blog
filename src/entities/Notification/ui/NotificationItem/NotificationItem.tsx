import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { INotification } from '@/entities/Notification/model/types/notifications';
import { Card, CardTheme } from '@/shared/ui/Card';
import { AppLink, BaseText } from '@/shared/ui';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string,
    item: INotification
}

export const NotificationItem = memo(({
    className,
    item,
}: NotificationItemProps) => {
    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <BaseText title={item.title} text={item.description} />
        </Card>
    );
    if (item.link) {
        return (
            <a className={cls.link} target="_blank" href={item.link} rel="noreferrer">
                {content}
            </a>
        );
    }
    return content;
});
