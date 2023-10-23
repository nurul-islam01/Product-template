import React, { StrictMode } from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import App from '@components/app/app';
import createStore from '@client/store';

// Create a store and get back itself and its history object
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
  module.hot.accept('./components/app/app', () => {
    render(<Application />, rootNode);
  });
}

loadableReady(() => {
  if (rootNode.hasChildNodes()) {
    // If it's an SSR, we use hydrate to get fast page loads by just
    // attaching event listeners after the initial render
    hydrate(<Application />, rootNode);
  } else {
    // const root = createRoot(rootNode);
    //  If we're not running on the server, just render like normal
    render(<Application />, rootNode);
  }
});
