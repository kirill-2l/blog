import { classNames, Mods } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input, Loader, BaseText } from 'shared/ui';
import { Profile } from 'entities/Profile';
import { TextAlign, TextTheme } from 'shared/ui/BaseText/BaseText';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeLastName?: (val?: string) => void;
    onChangeFirstName?: (val?: string) => void;
    onChangeAge?: (val?: string) => void;
    onChangeCity?: (val?: string) => void;
    onChangeCountry?: (val?: Country) => void;
    onChangeAvatar?: (val?: string) => void;
    onChangeUsername?: (val?: string) => void;
    onChangeCurrency?: (val?: Currency) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeCity,
        onChangeCountry,
        onChangeCurrency,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
    } = props;

    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
                    className,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <BaseText
                    theme={TextTheme.ERROR}
                    title={t('Error with loading profile')}
                    text={t('Try to refresh the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('your name')}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('your lastname')}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('your city')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

                <Input
                    className={cls.input}
                    value={String(data?.age)}
                    onChange={onChangeAge}
                    placeholder={t('your age')}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={String(data?.avatar)}
                    onChange={onChangeAvatar}
                    placeholder={t('Your avatar link')}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={String(data?.username)}
                    onChange={onChangeUsername}
                    placeholder={t('Your username')}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
