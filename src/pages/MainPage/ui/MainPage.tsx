import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            {t('main page')}
        </PageWrapper>
    );
};

export default MainPage;
