import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <div className={classNames(cls.LanguageSwitcher, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            >
                {t('language')}
            </Button>
        </div>
    );
};
