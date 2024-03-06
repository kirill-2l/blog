import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './state.schema';

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {},
    devTools: __IS_DEV__,

});
//
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
