import { IComment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentSchema extends EntityState<IComment> {
    isLoading?: boolean;
    error?: string;
}
