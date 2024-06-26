import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Popover, Icon, Drawer } from '@/shared/ui';

import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationsButtonProps {
    className?: string;
}

export const NotificationButton = memo(({ className }: NotificationsButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Icon
            clickable
            onClick={onOpenDrawer}
            Svg={NotificationIcon}
        />
    );
    return (
        <>
            <BrowserView>
                <Popover
                    trigger={trigger}
                    direction="bottom-left"
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}

                <Drawer
                    isOpen={isOpen}
                    onClose={onCloseDrawer}
                >
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
});
