import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '@/shared/ui/PageWrapper';
import { classNames } from '@/shared/libs/classNames/classNames';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return <PageWrapper className={classNames('', {}, [className])}>ArticleEditPageAsync</PageWrapper>;
});

export default ArticleEditPage;
