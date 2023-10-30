import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './i18n';

import App from './components/App.jsx';
import ScreenLoader from './components/ScreenLoader.jsx';

import { persistor, store } from './redux/store.js';

import './globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<ScreenLoader />} persistor={persistor}>
      <BrowserRouter basename="/react-node-fs78-SalOne22">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
