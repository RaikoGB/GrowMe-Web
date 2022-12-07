import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './Store/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
