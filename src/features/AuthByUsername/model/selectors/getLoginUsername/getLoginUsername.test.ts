import { getLoginUsername } from
    'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { StateSchema } from 'app/providers/store';

describe('getLoginUsername.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
