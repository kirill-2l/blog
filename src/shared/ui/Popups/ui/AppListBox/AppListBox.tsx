import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Button, HStack, Icon } from '@/shared/ui';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../utils/styleMapper';
import cls from './AppListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    className?: string;
    items?: ListBoxItem<T>[];
    value?: T;
    defaultValue?: T;
    label?: string;
    direction?: DropdownDirection;
    readonly?: boolean;
    onChange: (value: T) => void;
}

export const AppListBox = <T extends string>(props: ListBoxProps<T>) => {
    const { className, items, value, defaultValue, readonly, label, direction = 'bottom-right', onChange } = props;
    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedValue = useMemo(() => items?.find((item) => item.value === value), [items, value]);
    return (
        <HStack
            gap="8"
            align="center"
        >
            {label && <span>{label}</span>}

            <HListBox
                as="div"
                value={value}
                onChange={onChange}
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
            >
                <HListBox.Button
                    as={Button}
                    size="l"
                    // @ts-ignore
                    disabled={readonly}
                    variant="filled"
                    addonRight={<Icon Svg={ArrowIcon} />}
                    className={popupCls.trigger}
                >
                    {selectedValue?.content ?? defaultValue}
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected,
                                    })}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
