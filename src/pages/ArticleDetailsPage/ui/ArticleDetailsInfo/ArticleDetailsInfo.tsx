import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './ArticleDetailsInfo.module.scss';
import { Avatar, BaseText, Button, HStack, VStack } from '@/shared/ui';
import { User } from '@/entities/User';

interface ArticleDetailsInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
}

export const ArticleDetailsInfo = memo((props: ArticleDetailsInfoProps) => {
    const { t } = useTranslation();
    const { className, author, onEdit, views, createdAt } = props;
    return (
        <VStack
            gap="32"
            className={classNames(cls.ArticleAdditionalInfo, {}, [className])}
        >
            <HStack gap="8">
                <Avatar
                    src={author.avatar}
                    size={32}
                />
                <BaseText
                    text={author.username}
                    bold
                />
                <BaseText text={createdAt} />
            </HStack>
            <Button onClick={onEdit}>{t('Редактировать')}</Button>
            <BaseText text={t('{{count}} просмотров', { count: views })} />
        </VStack>
    );
});
