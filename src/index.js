// src/index.js
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure the correct file extension
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './Context/StoreContext.jsx'; // Ensure the correct file extension

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>,
);
