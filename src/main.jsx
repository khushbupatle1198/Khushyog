// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Make sure this is imported first
import './App.css';   // Then App.css

// Remove loading indicator once React loads
const rootElement = document.getElementById('root');
const loadingElement = document.querySelector('.loading');
if (loadingElement) {
  loadingElement.style.display = 'none';
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);