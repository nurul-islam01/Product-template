import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { createPromise } from 'redux-promise-middleware';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import isServer from '@utils/isServer';
import createRootReducer from './rootReducer';

export default (his) => {
  // Create a history depending on the environment
  const history = his || createBrowserHistory();

  const enhancers = [];

  // Dev tools are helpful
  if (process.env.NODE_ENV === 'development' && !isServer) {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const middlewares = [
    thunk,
    createPromise({
      promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
    }),
  ];
  const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  // Do we have preloaded state available? Great, save it.
  // eslint-disable-next-line no-underscore-dangle
  const initialState = !isServer ? window.__PRELOADED_STATE__ : {};
  delete initialState.router;
  // Delete it once we have it stored in a variable
  if (!isServer) {
    // eslint-disable-next-line no-underscore-dangle
    delete window.__PRELOADED_STATE__;
  }

  // Create the store
  const store = createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers
  );

  return {
    store,
    history,
  };
};
