import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store/config/state.schema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
    const {
        dispatch, extra, getState, rejectWithValue,
    } = thunkApi;
    const formData = getProfileForm(getState());
    try {
        const response = await extra.api.put<Profile>('/profile', formData);
        if (!response.data) {
            throw new Error();
        }
        const { data } = response;

        return data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
