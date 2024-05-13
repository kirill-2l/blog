import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo(({ className }: DetailsContainerProps) => {
    const { id } = useParams<{ id: string }>();
    if (!id) return null;
    return (
        <Card
            padding="16"
            className={className}
        >
            <ArticleDetails id={id} />
        </Card>
    );
});
