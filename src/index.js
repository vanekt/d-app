import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store';
import sagas from './sagas';
import { initUserRequest } from './actions/user';

import AuthApi from './api/auth';

const api = {
  auth: new AuthApi('')
};

const history = null; // TODO:
const store = configureStore({}, history);
store.runSaga(sagas, {
  api
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

store.dispatch(initUserRequest());
