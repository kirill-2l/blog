import { StateSchema } from 'app/providers/store';
import { getProfileValidateErrors } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema))
            .toEqual([
                ValidateProfileError.SERVER_ERROR,
                ValidateProfileError.INCORRECT_AGE,
            ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema))
            .toEqual(undefined);
    });
});
