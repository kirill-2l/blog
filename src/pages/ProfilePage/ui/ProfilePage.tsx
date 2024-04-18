import React from 'react';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const { id } = useParams();
    if (!id) return null;
    return (
        <PageWrapper>
            <VStack gap="16" max>

                <EditableProfileCard id={id} />
            </VStack>
        </PageWrapper>

    );
};

export default ProfilePage;
