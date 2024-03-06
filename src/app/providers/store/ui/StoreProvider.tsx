import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/store/config/config';
import { StateSchema } from 'app/providers/store/config/state.schema';

interface StoreProviderProps {
    children: ReactNode,
    initialState?: StateSchema,
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = createReduxStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
