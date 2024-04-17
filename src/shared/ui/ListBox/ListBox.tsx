import {
    Fragment, memo, ReactNode, useState,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button } from 'shared/ui';
import { HStack } from 'shared/ui/Stack';
import { DropdownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;

}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    label?: string;
    direction?: DropdownDirection;
    readonly?: boolean;
    onChange: (value: string) => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom-left': cls.optionsBottomLeft,
    'bottom-right': cls.optionsBottomRight,
    'top-left': cls.optionsTopLeft,
    'top-right': cls.optionsTopRight,
};

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        readonly,
        label,
        direction = 'bottom-right',
        onChange,
    } = props;
    const optionsClasses = [mapDirectionClass[direction]];
    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}

            <HListBox
                as="div"
                value={value}
                onChange={onChange}
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({
                                active,
                                selected,
                            }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
});
