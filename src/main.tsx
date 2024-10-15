import React from 'react';
import ReactDOM from 'react-dom/client';
// React Router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';

// Helmet
import { HelmetProvider } from 'react-helmet-async';

import '@/assets/css/responsive.css';
// css
import '@/assets/css/style.css';

import { store } from '@/store';

// App
import App from './App.tsx';
// i18n
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
