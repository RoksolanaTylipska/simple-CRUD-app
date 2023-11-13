import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import { HashRouter } from 'react-router-dom';
import AppContextProvider from './components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </AppContextProvider>
  </React.StrictMode>
);
