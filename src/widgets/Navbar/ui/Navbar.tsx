import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, BaseText } from 'shared/ui';
import { TextSize, TextTheme } from 'shared/ui/BaseText/BaseText';
import { AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;
    const onCloseModal = useCallback(
        () => {
            setIsAuthModalOpened(false);
        },
        [],
    );
    const onSuccess = useCallback(
        () => {
            onCloseModal();
            navigate(RoutePath.main);
        },
        [navigate, onCloseModal],
    );
    const onShowModal = useCallback(
        () => setIsAuthModalOpened(true),
        [],
    );

    const onLogout = useCallback(
        () => dispatch(userActions.logout()),
        [dispatch],
    );

    if (authData) {
        return (
            <div className={classNames(cls.navbar)}>
                <BaseText
                    className={cls.logo}
                    theme={TextTheme.INVERTED}
                    title="LOGO"
                    size={TextSize.L}
                />
                <AppLink
                    theme={AppLinksTheme.SECONDARY}
                    to={RoutePath.article_create}
                >
                    {t('Create article')}
                </AppLink>
                <Dropdown
                    className={cls.dropdown}
                    direction="bottom-left"
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t('Admin panel'),
                            href: `${AppRoutes.ADMIN_PANEL}`,
                        }] : []),
                        {
                            content: t('Profile page'),
                            href: `${AppRoutes.PROFILE}/${authData.id}`,
                        },
                        {
                            content: t('Log out'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={35} src={authData.avatar} />}
                />

            </div>
        );
    }
    return (

        <header className={classNames(cls.navbar)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Log in')}
            </Button>

            {isAuthModalOpened && (
                <LoginModal
                    isOpen={isAuthModalOpened}
                    onClose={onCloseModal}
                    onSuccess={onSuccess}
                />
            )}

        </header>
    );
});
