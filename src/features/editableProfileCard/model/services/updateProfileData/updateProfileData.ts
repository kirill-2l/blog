import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/config/state.schema';

import { Profile } from '@/entities/Profile';
import {
    validateProfileData,
} from '@/features/editableProfileCard/model/services/validateProfileData/validateProfileData';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ValidateProfileError } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
    const {
        dispatch,
        extra,
        getState,
        rejectWithValue,
    } = thunkApi;
    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);
    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
        if (!response.data) {
            throw new Error();
        }
        const { data } = response;

        return data;
    } catch (e) {
        console.log(e);
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
