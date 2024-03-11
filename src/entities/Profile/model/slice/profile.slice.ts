import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from 'entities/Profile';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: profileActions,
    reducer: profileReducer,
} = userSlice;
