import { useTranslation } from 'react-i18next';

import { memo, useCallback } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { ListBox } from '@/shared/ui';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (v: Country) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Country.Belarus,
        content: Country.Belarus,
    },
    {
        value: Country.Argentina,
        content: Country.Argentina,
    },
    {
        value: Country.Kazakhstan,
        content: Country.Kazakhstan,
    },
    {
        value: Country.Ukraine,
        content: Country.Ukraine,
    },
    {
        value: Country.Russia,
        content: Country.Russia,
    },
];
export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();
    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue={t('Your country')}
            label={t('Your country')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
