import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {User, userActions} from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage';

export interface LoginByUsernameProps {
    username: string;
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>(
    'login/loginByUsername',
    async (payload, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', payload);
            if (!response.data) {
                throw new Error();
            }
            const {data} = response;

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            thunkAPI.dispatch(userActions.setAuthData(data));
            return data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(i18n.t('Wrong login or password'));
        }
    },
);
