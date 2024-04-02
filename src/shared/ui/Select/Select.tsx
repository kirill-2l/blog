import { classNames, Mods } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  readonly?: boolean;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, readonly, options, value, onChange,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(
        () => options?.map((i) => (
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
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});
