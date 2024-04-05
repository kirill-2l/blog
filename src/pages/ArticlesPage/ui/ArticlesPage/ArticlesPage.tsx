import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticlesPageProps {
    className?: string,
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])} />
    );
};

export default memo(ArticlesPage);
