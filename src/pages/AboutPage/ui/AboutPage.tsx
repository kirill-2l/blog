import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/shared/ui';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return <PageWrapper data-testid="AboutPage">{t('About page')}</PageWrapper>;
};

export default AboutPage;
