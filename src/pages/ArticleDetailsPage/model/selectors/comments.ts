import { StateSchema } from 'app/providers/store';

// eslint-disable-next-line max-len
export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
