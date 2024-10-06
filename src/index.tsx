import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/pages/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

declare global {
  interface Window {
    initMap: () => void;
  }
}

root.render(
    <Home/>
  // <React.StrictMode>
  // </React.StrictMode>
);
