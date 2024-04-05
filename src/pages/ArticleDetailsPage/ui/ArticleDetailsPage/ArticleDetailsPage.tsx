import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { BaseText } from 'shared/ui';

interface ArticleDetailsPageProps {
    className?: string,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
