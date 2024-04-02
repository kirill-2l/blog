import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store/config/state.schema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.get<Profile>('/profile');
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
