import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import { Provider } from 'react-redux';
import {persistor, store} from './redux/store'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Suspense>
            <App />
          </Suspense>
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode> 
);
