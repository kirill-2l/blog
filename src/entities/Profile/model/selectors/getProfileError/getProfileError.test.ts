import { StateSchema } from 'app/providers/store';
import { getProfileError } from 'entities/Profile';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'str',
            },
        };
        expect(getProfileError(state as StateSchema))
            .toEqual('str');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema))
            .toEqual(undefined);
    });
});
