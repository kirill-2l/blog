import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/EroreBoundary';
import { StoreProvider } from 'app/providers/store';
import './app/styles/index.scss';

import App from './app/App';
import 'shared/config/i18n/i18n';

const container = document.getElementById('root');
if (!container) {
    throw new Error('container root not found');
}

const root = createRoot(container);

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
);
