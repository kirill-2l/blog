import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Button, ButtonTheme, AppLink, BaseText, HStack, AppLinksTheme , TextSize, TextTheme } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate, getRouteMain } from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const navigate = useNavigate();
    const onCloseModal = useCallback(() => {
        setIsAuthModalOpened(false);
    }, []);
    const onSuccess = useCallback(() => {
        onCloseModal();
        navigate(getRouteMain());
    }, [navigate, onCloseModal]);
    const onShowModal = useCallback(() => setIsAuthModalOpened(true), []);

    if (authData) {
        return (
            <div className={classNames(cls.navbar)}>
                <BaseText className={cls.logo} theme={TextTheme.INVERTED} title="LOGO"
size={TextSize.L} />
                <AppLink theme={AppLinksTheme.SECONDARY} to={getRouteArticleCreate()}>
                    {t('Create article')}
                </AppLink>
                <HStack className={cls.actions} gap="16">
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </div>
        );
    }
    return (
        <header className={classNames(cls.navbar)}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                {t('Log in')}
            </Button>

            {isAuthModalOpened && (
                <LoginModal isOpen={isAuthModalOpened} onClose={onCloseModal} onSuccess={onSuccess} />
            )}
        </header>
    );
});
