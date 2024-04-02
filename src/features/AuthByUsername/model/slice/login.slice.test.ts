import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/login.slice';

describe('login.slice.test', () => {
    test('test setUsername', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('1234')))
            .toStrictEqual({ username: '1234' });
    });

    test('test setPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('1234')))
            .toEqual({ password: '1234' });
    });
});
