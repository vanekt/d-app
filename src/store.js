import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();

let optionalMiddlewares = [];
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true, diff: true });
  optionalMiddlewares.push(logger);
}

let composeEnhancers = compose;
if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export default function configureStore(initialState = {}, history) {
  const store = createStore(
    connectRouter(history)(reducers),
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, routerMiddleware(history), ...optionalMiddlewares)
    )
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  return store;
}
