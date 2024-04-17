import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    content: ReactNode;
    disabled?: true;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        items,
        className,
        trigger,
        direction = 'bottom-right',
    } = props;

    const mapDirectionClass: Record<DropdownDirection, string> = {
        'bottom-left': cls.optionsBottomLeft,
        'bottom-right': cls.optionsBottomRight,
        'top-left': cls.optionsTopLeft,
        'top-right': cls.optionsTopRight,
    };

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
                {items?.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            disabled={item?.disabled}
                            className={
                                classNames(cls.item, { [cls.active]: active })
                            }
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}

                            >
                                {item.content}
                            </Menu.Item>

                        );
                    }

                    return (

                        <Menu.Item
                            as={Fragment}
                            disabled={item?.disabled}
                        >

                            {content}
                        </Menu.Item>

                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
