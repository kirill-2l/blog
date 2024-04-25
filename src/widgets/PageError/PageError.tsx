import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
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
                theme={ButtonTheme.CLEAR}
                onClick={refreshPage}
            >
                <p>{t('Refresh page')}</p>
            </Button>
        </div>
    );
};
