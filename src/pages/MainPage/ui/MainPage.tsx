import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/shared/ui/PageWrapper';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    const onCancel = () => {
    };
    const onAccept = () => {
    };

    return (
        <PageWrapper>
            {t('main page')}
            <RatingCard
                title="How it was?"
                feedbackTitle="How it was"
                onAccept={onAccept}
                onCancel={onCancel}
                hasFeedback
            />
        </PageWrapper>
    );
};

export default MainPage;
