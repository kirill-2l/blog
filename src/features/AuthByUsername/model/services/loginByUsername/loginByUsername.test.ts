import axios from 'axios';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/libs/tests/TestAsyncThunk';

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userData = {
            username: '123',
            id: '1',
        };
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockResolvedValue(Promise.resolve({
            data: userData,
        }));

        const res = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(res.payload).toEqual(userData);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockResolvedValue(Promise.resolve({ status: 403 }));
        const res = await thunk.callThunk({ username: '123', password: '123' });
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('rejected');
        expect(res.payload).toEqual('error');
    });
});
