import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/libs/classNames/classNames';
import { PageWrapper } from '@/shared/ui/PageWrapper';

interface AdminPanelPageProps {
    className?: string,
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
    const { t } = useTranslation();
    return (
        <PageWrapper className={classNames('', {}, [className])}>
            {t('Admin panel')}
        </PageWrapper>
    );
};

export default AdminPanelPage;
