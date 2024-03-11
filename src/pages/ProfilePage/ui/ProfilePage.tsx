import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from
    'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('about');
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Profile page')}

                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
