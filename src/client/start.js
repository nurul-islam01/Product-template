import React, { StrictMode } from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import App from '@client/app';
import createStore from '@client/store';

const { store, history } = createStore();

function Application() {
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}

const rootNode = document.getElementById('root');

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app', () => {
    render(<Application />, rootNode);
  });
}

loadableReady(() => {
  if (rootNode.hasChildNodes()) {
    hydrate(<Application />, rootNode);
  } else {
    render(<Application />, rootNode);
  }
});
