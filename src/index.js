import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MealsProvider } from './context/MealsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <MealsProvider>
      <App />
    </MealsProvider>
  // </React.StrictMode>
);