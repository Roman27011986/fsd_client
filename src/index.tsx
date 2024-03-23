import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';

import App from './app/App';

import './shared/config/i18n/i18n';

import './app/styles/index.scss';

const root = createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <StrictMode>
        <BrowserRouter>
            <ErrorBoundary fallback={<PageError />}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StrictMode>,
);
