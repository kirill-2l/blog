import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useCallback } from 'react';
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
    const {
        className, value, onChange, readonly,
    } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Your country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
