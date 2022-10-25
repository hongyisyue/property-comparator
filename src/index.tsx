import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestTable from './table';

const myTable = <TestTable/>
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {myTable}
  </React.StrictMode>
);
