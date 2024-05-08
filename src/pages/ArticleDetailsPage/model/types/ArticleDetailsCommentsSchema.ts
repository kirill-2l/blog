import { EntityState } from '@reduxjs/toolkit';
import { IComment } from '@/entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<IComment, string> {
    isLoading?: boolean;
    error?: string;
}
