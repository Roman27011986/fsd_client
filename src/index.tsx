import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";

import App from "./app/App";

import './app/styles/index.scss'

const root = createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                 <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
);