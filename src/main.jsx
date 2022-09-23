import React from 'react';
import ReactDOM from 'react-dom/client';
//REDUX
import { Provider } from 'react-redux';
import store from './store';
//ROUTER
import { HashRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
