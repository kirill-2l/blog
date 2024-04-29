import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/libs/classNames/classNames';
import { PageWrapper } from '@/shared/ui/PageWrapper';

interface ForbiddenPageProps {
    className?: string,
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation();
    return (
        <PageWrapper className={classNames('', {}, [className])} data-testid="ForbiddenPage">
            {t('You don\'t have access to this page.')}
        </PageWrapper>
    );
};

export default ForbiddenPage;
