import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/store/config/state.schema';

export interface LoginByUsernameProps {
    username: string;
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (payload, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;
        try {
            // @ts-ignore
            const response = await extra.api.post<User>('/login', payload);
            if (!response.data) {
                throw new Error();
            }
            const { data } = response;

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            dispatch(userActions.setAuthData(data));
            return data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
