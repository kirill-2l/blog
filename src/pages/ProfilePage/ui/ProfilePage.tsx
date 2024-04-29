import React from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '@/shared/ui/PageWrapper';
import { VStack } from '@/shared/ui/Stack';
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
