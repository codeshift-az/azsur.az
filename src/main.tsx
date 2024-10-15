import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { HelmetProvider } from 'react-helmet-async';

import '@/assets/css/responsive.css';
import '@/assets/css/style.css';

import { store } from '@/store';

import App from './App.tsx';
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
