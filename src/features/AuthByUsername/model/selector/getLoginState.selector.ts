import { StateSchema } from 'app/providers/store/config/state.schema';

export const getLoginState = (state: StateSchema) => state?.login;
