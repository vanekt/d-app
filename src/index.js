import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store';
import sagas from './sagas';
import { initUserRequest } from './actions/user';

import AuthApi from './api/auth';

const api = {
  auth: new AuthApi('')
};

const store = configureStore({});
store.runSaga(sagas, {
  api
});

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

store.dispatch(initUserRequest());
