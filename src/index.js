import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import configureStore from './store';
import sagas from './sagas';
import { initUserRequest } from './actions/user';

import AuthApi from './api/auth';

const api = {
  auth: new AuthApi('')
};

const history = createBrowserHistory();
const store = configureStore({}, history);
store.runSaga(sagas, {
  api
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

store.dispatch(initUserRequest());
