import React from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper , VStack } from '@/shared/ui';
import { EditableProfileCard } from '@/features/editableProfileCard';

const ProfilePage = () => {
    const { id } = useParams();
    if (!id) return null;
    return (
        <PageWrapper data-testid="ProfilePage">
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </PageWrapper>
    );
};

export default ProfilePage;
