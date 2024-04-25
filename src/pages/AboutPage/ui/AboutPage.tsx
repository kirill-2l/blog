import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/shared/ui/PageWrapper';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <PageWrapper>
            {t('About page')}
        </PageWrapper>
    );
};

export default AboutPage;
