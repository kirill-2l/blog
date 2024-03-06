import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

function Navbar({ className }: NavbarProps) {
    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(
        () => setIsAuthModalOpened((prev) => !prev),
        [setIsAuthModalOpened],
    );
    return (

        <div className={classNames(cls.navbar)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Log in')}
            </Button>
            <Modal
                isOpen={isAuthModalOpened}
                onClose={onToggleModal}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Autem perspiciatis, sint. Beatae fuga iure
                natus sunt suscipit ut? Doloribus, eveniet.

            </Modal>

        </div>
    );
}

export default Navbar;
