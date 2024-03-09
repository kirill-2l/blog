import { StateSchema } from 'app/providers/store/config/state.schema';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
