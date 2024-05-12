import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { AppListBox } from '@/shared/ui';

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
    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <AppListBox
            className={classNames('', {}, [className])}
            value={value}
            defaultValue={t('Your currency')}
            label={t('Your currency')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
