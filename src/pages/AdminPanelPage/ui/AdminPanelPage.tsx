import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';

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
