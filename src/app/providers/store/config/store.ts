import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/store/config/reducerManager';
import { api } from 'shared/api/axios.instance';
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

    const store = configureStore({
        reducer: reducersManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducersManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
