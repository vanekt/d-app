import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
// import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'react-router-redux';

// const logger = createLogger()
const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;
if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  const middlewares = [
    sagaMiddleware
    // routerMiddleware(history)
    //, logger
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(reducers, initialState, composeEnhancers(...enhancers));

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  return store;
}
