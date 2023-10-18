import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from the correct location
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root entry point for rendering your React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the `render` method to render your app component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to measure performance, you can use the reportWebVitals function

reportWebVitals();
