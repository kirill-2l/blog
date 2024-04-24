import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/config/state.schema';
import { IComment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    IComment[],
    string | undefined,
    ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
    const {
        extra,
        rejectWithValue,
    } = thunkApi;
    try {
        const response = await extra.api.get<IComment[]>('/comments/', {
            params: {
                articleId,
                _expand: 'user',
            },
        });
        if (!response.data) {
            throw new Error();
        }
        const { data } = response;

        return data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
