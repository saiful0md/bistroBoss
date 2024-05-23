import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router/Router.jsx';
import './index.css';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider.jsx';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={Router}></RouterProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
