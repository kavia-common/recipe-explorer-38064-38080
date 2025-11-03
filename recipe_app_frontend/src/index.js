/**
 * PUBLIC_INTERFACE
 * Entry point that mounts the React application to #root in public/index.html
 * - Wraps App with BrowserRouter for client-side routing.
 * - Loads global index.css.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
