import { useTranslation } from 'react-i18next';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/store/config/state.schema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList,
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;
    const { t } = useTranslation();
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers)
            .forEach(([name, reducer]) => {
                const mounted = mountedReducers[name as StateSchemaKey];
                if (!mounted) {
                    store.reducerManager.add(name as StateSchemaKey, reducer);
                    dispatch({ type: `@ INIT ${name.toUpperCase()} REDUCER` });
                }
            });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([name]) => {
                        store.reducerManager.remove(name as StateSchemaKey);
                        dispatch({ type: `@ REMOVE ${name.toUpperCase()} REDUCER` });
                    });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
    );
};
