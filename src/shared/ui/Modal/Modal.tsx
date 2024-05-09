import React, { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/libs/classNames/classNames';
import { Portal } from '@/shared/ui/Portal';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Overlay } from '@/shared/ui/Overlay';
import { useModal } from '@/shared/libs/hooks/useModal/useModal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { close, isClosing, isMounted } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    const { theme } = useTheme();
    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
