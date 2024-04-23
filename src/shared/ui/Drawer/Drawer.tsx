import { classNames, Mods } from 'shared/libs/classNames/classNames';
import { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from 'shared/ui';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string,
    children: ReactNode,
    isOpen?: boolean
    onClose?: () => void
}

export const Drawer = (props: DrawerProps) => {
    const {
        isOpen,
        children,
        onClose,
        className,
    } = props;

    const { theme } = useTheme();
    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
