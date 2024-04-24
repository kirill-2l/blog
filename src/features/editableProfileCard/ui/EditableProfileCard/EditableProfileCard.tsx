import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/libs/classNames/classNames';

import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { BaseText } from '@/shared/ui';
import { TextTheme } from '@/shared/ui/BaseText/BaseText';
import { ProfileCard } from '@/entities/Profile';
import {
    DynamicModuleLoader, ReducersList,
} from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';

import {
    getProfileForm,
} from '@/features/editableProfileCard/model/selectors/getProfileForm/getProfileForm';
import { useInitialEffect } from '@/shared/libs/hooks/useInitialEffect/useInitialEffect';
import {
    fetchProfileData,
} from '@/features/editableProfileCard/model/services/fetchProfileData/fetchProfileData';
import {
    EditableProfileCardHeader,
} from '@/features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader';
import { VStack } from '@/shared/ui/Stack';
import {
    getProfileError,
} from '../../model/selectors/getProfileError/getProfileError';
import {
    getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import {
    getProfileReadonly,
} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions, profileReducer } from '../../model/slice/profile.slice';
import {
    getProfileValidateErrors,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ValidateProfileError } from '../../model/types/profile';

interface EditableProfileCardProps {
    className?: string,
    id: string
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo(({
    className,
    id,
}: EditableProfileCardProps) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const form = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );
    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
        },
        [dispatch],
    );
    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );
    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );
    const onChangeCurrency = useCallback(
        (currency?: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );
    const onChangeCountry = useCallback(
        (country?: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );

    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslate = {
        [ValidateProfileError.NO_DATA]: t('Empty data'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors && validateErrors.map((err) => (
                    <BaseText
                        key={err}
                        text={validateErrorsTranslate[err]}
                        theme={TextTheme.ERROR}
                        data-testid="EditableProfileCard.Error"
                    />
                ))}
                <ProfileCard
                    data={form}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeCountry={onChangeCountry}
                    onChangeAge={onChangeAge}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    readonly={readonly}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
