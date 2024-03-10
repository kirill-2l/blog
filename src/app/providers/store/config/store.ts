import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/store/config/reducerManager';
import { StateSchema } from './state.schema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        ...asyncReducers,
    };

    const reducersManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducersManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducersManager;

    return store;
}
