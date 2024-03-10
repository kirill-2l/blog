import { StateSchema } from 'app/providers/store';

export const getLoginPassword = (state: StateSchema) => state?.login?.password || '';
