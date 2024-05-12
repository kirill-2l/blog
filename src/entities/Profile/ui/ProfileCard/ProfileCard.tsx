import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Input, BaseText, HStack, VStack, Avatar, Card, Skeleton } from '@/shared/ui';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency/model/types/currency';
import { CurrencySelect } from '@/entities/Currency';
import { Country } from '@/entities/Country/model/types/country';
import { CountrySelect } from '@/entities/Country/ui/CountrySelect/CountrySelect';
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

    if (isLoading) {
        return (
            <Card
                padding="24"
                max
            >
                <VStack gap="32">
                    <HStack
                        max
                        justify="center"
                    >
                        <Skeleton
                            borderRadius="100%"
                            width={128}
                            height={128}
                        />
                    </HStack>
                    <HStack
                        gap="32"
                        max
                    >
                        <VStack
                            gap="16"
                            max
                        >
                            <Skeleton
                                width="100%"
                                height={38}
                            />
                            <Skeleton
                                width="100%"
                                height={38}
                            />
                            <Skeleton
                                width="100%"
                                height={38}
                            />
                            <Skeleton
                                width="100%"
                                height={38}
                            />
                        </VStack>

                        <VStack
                            gap="16"
                            max
                        >
                            <Skeleton
                                width="100%"
                                height={38}
                            />
                            <Skeleton
                                width="100%"
                                height={38}
                            />
                            <Skeleton
                                width="100%"
                                height={38}
                            />
                            <Skeleton
                                width="100%"
                                height={38}
                            />
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
            >
                <BaseText
                    variant="error"
                    title={t('Error with loading profile')}
                    text={t('Try to refresh the page')}
                    align="center"
                />
            </HStack>
        );
    }
    return (
        <Card
            max
            padding="24"
            className={classNames('', {}, [className])}
        >
            {data?.avatar && (
                <HStack
                    max
                    justify="center"
                    className={cls.avatarWrapper}
                >
                    <Avatar
                        size={128}
                        src={data?.avatar}
                    />
                </HStack>
            )}
            <HStack gap="24">
                <VStack gap="16">
                    <Input
                        className={cls.input}
                        value={data?.first}
                        label={t('Name')}
                        onChange={onChangeFirstName}
                        data-testid="ProfileCard.FirstNameInput"
                        readonly={readonly}
                    />
                    <Input
                        className={cls.input}
                        value={data?.lastname}
                        label={t('your lastname')}
                        onChange={onChangeLastName}
                        data-testid="ProfileCard.LastNameInput"
                        readonly={readonly}
                    />
                    <Input
                        className={cls.input}
                        value={data?.city}
                        label={t('City')}
                        onChange={onChangeCity}
                        readonly={readonly}
                    />

                    <Input
                        className={cls.input}
                        value={String(data?.age)}
                        onChange={onChangeAge}
                        label={t('your age')}
                        readonly={readonly}
                    />
                </VStack>
                <VStack gap="16">
                    <Input
                        className={cls.input}
                        value={String(data?.avatar)}
                        onChange={onChangeAvatar}
                        label={t('Your avatar link')}
                        readonly={readonly}
                    />
                    <Input
                        className={cls.input}
                        value={String(data?.username)}
                        onChange={onChangeUsername}
                        label={t('Your username')}
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
                </VStack>
            </HStack>
        </Card>
    );
};
