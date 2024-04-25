import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addCommentFormSchema } from '@/features/addCommentForm';

const initialState: addCommentFormSchema = {
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setText(state, action: PayloadAction<string>) {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        // builder
        //     .addCase(loginByUsername.pending, (state, action) => {
        //         state.error = undefined;
        //         state.isLoading = true;
        //     })
        //     .addCase(loginByUsername.fulfilled, (state, action) => {
        //         state.isLoading = false;
        //     })
        //     .addCase(loginByUsername.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },

});

export const {
    actions: addCommentFormActions,
    reducer: addCommentFormReducer,
} = addCommentFormSlice;
