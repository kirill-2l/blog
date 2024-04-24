import { StateSchema } from '@/app/providers/store';

/* eslint-disable max-len */
export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
