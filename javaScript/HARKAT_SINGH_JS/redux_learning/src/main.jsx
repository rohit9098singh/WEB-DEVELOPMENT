import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'; // Corrected typo
import {store} from './store/store.js'; // Ensure you have the correct path to your Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </StrictMode>,
);
