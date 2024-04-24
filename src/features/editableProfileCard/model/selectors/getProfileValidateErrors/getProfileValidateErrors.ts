import { StateSchema } from '@/app/providers/store';

export const getProfileValidateErrors = (state: StateSchema) => state?.profile?.validateErrors;
