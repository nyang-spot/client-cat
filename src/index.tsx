import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { globalStyle } from 'global.style';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyle} />
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
