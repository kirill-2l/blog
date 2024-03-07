import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/store/config/config';
import { StateSchema } from 'app/providers/store/config/state.schema';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children: ReactNode,
    initialState?: DeepPartial<StateSchema>,
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
