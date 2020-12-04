import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SandwichProvider } from './SandwichContext';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SandwichProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SandwichProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
