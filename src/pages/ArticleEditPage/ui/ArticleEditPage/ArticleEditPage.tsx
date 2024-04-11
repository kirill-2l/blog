import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
    className?: string,
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <PageWrapper className={classNames('', {}, [className])}>
            ArticleEditPageAsync
        </PageWrapper>
    );
});

export default ArticleEditPage;