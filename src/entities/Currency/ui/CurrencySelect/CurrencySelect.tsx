import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (v: Currency) => void;
  readonly?: boolean;
}

const options = [
    {
        value: Currency.USD,
        content: Currency.USD,
    },
    {
        value: Currency.EURO,
        content: Currency.EURO,
    },
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
];
export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();
    const {
        className, value, onChange, readonly,
    } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <Select
            className={classNames('', {}, [className])}
            value={value}
            label={t('Your currency')}
            options={options}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
