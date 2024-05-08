import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StoreProvider } from '@/app/providers/store';
import { StateSchema } from '@/app/providers/store/config/state.schema';

export interface ComponentRenderOptions {
    route?: string,
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
}

interface TestProviderProps {
    children: ReactNode;
    options?: ComponentRenderOptions;
}

export const TestProvider = (props: TestProviderProps) => {
    const {
        children,
        options = {},
    } = props;

    const {
        route = '/',
        initialState,
        asyncReducers,
    } = options;

    return (
        <StoreProvider asyncReducers={asyncReducers} initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {children}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    return render(
        <TestProvider options={options}>
            {component}
        </TestProvider>,
    );
}
