import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onCloseModal = useCallback(
        () => {
            setIsAuthModalOpened(false);
        },
        [],
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
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogout}
                >
                    {t('Log out')}
                </Button>

            </div>
        );
    }
    return (

        <div className={classNames(cls.navbar)}>
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
                />
            )}

        </div>
    );
};
