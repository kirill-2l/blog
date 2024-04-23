import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, Icon } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationsButtonProps {
    className?: string,
}

export const NotificationButton = memo(({ className }: NotificationsButtonProps) => (
    <Popover
        trigger={(
            <Button theme={ButtonTheme.CLEAR}>
                <Icon inverted Svg={NotificationIcon} />
            </Button>
        )}
        direction="bottom-left"
    >
        <NotificationList
            className={cls.notifications}
        />
    </Popover>

));
