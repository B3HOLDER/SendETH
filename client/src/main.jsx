import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TransactionsProvider } from './context/TransactionContext';
import './index.css';

const rootElement = document.getElementById('root');
const app = (
  <TransactionsProvider>
    <App />
  </TransactionsProvider>
);

ReactDOM.createRoot(rootElement).render(app);