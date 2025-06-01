import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { FocusRoot } from '@please/lrud';
import App from './App';
import  'src/tv/App.module.scss';
const rootEl = document.getElementById('root');
if (!rootEl) {
    throw new Error('Cannot find root element');
}

if (rootEl.hasChildNodes()) {
    // Hydrate if there are existing nodes (SSR case)
    hydrateRoot(rootEl, <App />);
} else {
    const root = createRoot(rootEl);
    root.render(
        <React.StrictMode>
            <FocusRoot>
                <App />
            </FocusRoot>
        </React.StrictMode>
    );
}
