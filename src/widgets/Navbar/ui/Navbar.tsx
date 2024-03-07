import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

function Navbar({ className }: NavbarProps) {
    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback(
        () => setIsAuthModalOpened(false),
        [],
    );
    const onShowModal = useCallback(
        () => setIsAuthModalOpened(true),
        [],
    );
    return (

        <div className={classNames(cls.navbar)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Log in')}
            </Button>
            <LoginModal
                isOpen={isAuthModalOpened}
                onClose={onCloseModal}
            />

        </div>
    );
}

export default Navbar;
