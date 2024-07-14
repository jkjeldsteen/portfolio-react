import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Wait for DOM to be fully loaded before attempting to get element by ID
document.addEventListener('DOMContentLoaded', function () {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('Root element with id "root" not found in the DOM.');
  }

  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  reportWebVitals();
});
