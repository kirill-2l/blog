import { StateSchema } from 'app/providers/store';

export const getUserIsInited = (state: StateSchema) => state.user._inited;
