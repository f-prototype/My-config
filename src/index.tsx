import { App } from 'app/App';

import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { PageError } from 'widgets/PageError';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <ErrorBoundary fallback={<PageError />}>
            <App />
        </ErrorBoundary>
    </BrowserRouter>,
);
