import { useTranslation } from 'react-i18next';
import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from '@/shared/libs/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    readonly?: boolean;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, readonly, options, value, onChange } = props;
    const { t } = useTranslation();

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(
        () =>
            options?.map((i) => (
                <option key={i.value} value={i.value}>
                    {i.content}
                </option>
            )),
        [options],
    );

    const mods: Mods = {};
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
                {optionsList}
            </select>
        </div>
    );
};
