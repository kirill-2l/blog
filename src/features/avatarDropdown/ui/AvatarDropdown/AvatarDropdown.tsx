import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Dropdown } from '@/shared/ui';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';

import { AppRoutes } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;
    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);

    if (!authData) return null;

    return (
        <Dropdown
            direction="bottom-left"
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Admin panel'),
                              href: `${AppRoutes.ADMIN_PANEL}`,
                          },
                      ]
                    : []),
                {
                    content: t('Profile page'),
                    href: `${AppRoutes.PROFILE}/${authData.id}`,
                },
                {
                    content: t('Log out'),
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Avatar
                    size={40}
                    src={authData.avatar}
                />
            }
        />
    );
});
