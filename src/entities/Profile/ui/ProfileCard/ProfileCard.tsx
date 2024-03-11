import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, Input, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile page')} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('edit')}</Button>
            </div>
            <div className={cls.data}>
                <Input
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('your name')}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('your lastname')}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('your city')}
                />
                <Input
                    className={cls.input}
                    value={data?.country}
                    placeholder={t('your country')}
                />
                <Input
                    className={cls.input}
                    value={String(data?.age)}
                    placeholder={t('your age')}
                />
                {/* <Input value={data?.currency} placeholder={t('your currency')} /> */}
            </div>
        </div>
    );
};
