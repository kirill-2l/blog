import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './state.schema';

const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    login: loginReducer,
};
export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
});
//
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
