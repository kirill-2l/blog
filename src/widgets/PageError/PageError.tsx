import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string,
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    // eslint-disable-next-line no-restricted-globals
    const refreshPage = () => location.reload();

    return (
        <div className={classNames(cls.PageError)}>
            <p>{t('Errors sometimes happen')}</p>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={refreshPage}
            >
                <p>{t('Refresh page')}</p>
            </Button>
        </div>
    );
};
