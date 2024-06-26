import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Button } from '@/shared/ui';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher = memo(({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <div className={classNames(null, {}, [className])}>
            <Button
                variant="clear"
                onClick={toggle}
            >
                {t(short ? 'language_short' : 'language')}
            </Button>
        </div>
    );
});
