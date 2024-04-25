import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { DropdownItem } from '@/shared/ui/Popups';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../utils/styleMapper';

interface PopoverProps {
    className?: string,
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
    const { t } = useTranslation();
    const {
        className,
        trigger,
        direction = 'bottom-right',
        children,
    } = props;
    return (
        <div className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HeadlessPopover className="relative">
                <HeadlessPopover.Button
                    as="div"
                    className={popupCls.trigger}
                >
                    {trigger}
                </HeadlessPopover.Button>

                <HeadlessPopover.Panel
                    className={classNames(cls.panel, {}, [mapDirectionClass[direction]])}
                >
                    {children}
                </HeadlessPopover.Panel>
            </HeadlessPopover>
        </div>
    );
});
