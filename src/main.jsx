import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router/Router.jsx';
import './index.css';

import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={Router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
