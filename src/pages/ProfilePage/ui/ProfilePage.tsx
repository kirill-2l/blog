import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly, getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData }
    from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { TextTheme, BaseText } from 'shared/ui/BaseText/BaseText';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const form = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslate = {
        [ValidateProfileError.NO_DATA]: t('Empty data'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    };

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

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ProfilePageHeader />
                {validateErrors && validateErrors.map((err) => (
                    <BaseText
                        key={err}
                        text={validateErrorsTranslate[err]}
                        theme={TextTheme.ERROR}
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
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
