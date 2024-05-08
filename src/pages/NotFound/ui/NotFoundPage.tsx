import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/libs/classNames/classNames';
import { PageWrapper } from '@/shared/ui/PageWrapper';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <PageWrapper className={classNames(cls.NotFoundPage)} data-testid="NotFoundPage">
            {t('Not found')}
        </PageWrapper>
    );
};
