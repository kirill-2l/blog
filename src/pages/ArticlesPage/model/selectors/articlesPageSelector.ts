import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view;
