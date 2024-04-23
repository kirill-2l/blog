import { classNames, Mods } from 'shared/libs/classNames/classNames';
import { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from 'shared/ui';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { useModal } from 'shared/libs/hooks/useModal/useModal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = (props: DrawerProps) => {
    const {
        isOpen,
        children,
        onClose,
        className,
        lazy,
    } = props;

    const {
        close,
        isClosing,
        isMounted,
    } = useModal({
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
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
