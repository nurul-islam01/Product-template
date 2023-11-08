/* eslint-disable no-console */
import React, { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { StaticRouter } from 'react-router-dom/server';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

import createStore from '@client/store';
import App from '@client/app';
import RouteList from '@client/routes';
import { setHelmetInfo } from '@components/common/helmet/actions';
import Meta from '@utils/meta';
import {
  getInlineCss,
  getRouteActions,
  injectHTML,
  readHtmlFileData,
} from './renderHelper';

let htmlFileData;

const renderer = async (req, res, clientStats) => {
  res.setHeader('Cache-Control', 'max-age=86400');
  const history = createMemoryHistory({
    initialEntries: [`${req.path}?ssr=true`],
  });
  // Create a store (with a memory history) from our current url
  const { store } = createStore(history);
  const context = {};
  const extractor = new ChunkExtractor({ stats: clientStats });

  const actions = RouteList.reduce((routeActions, route) => {
    getRouteActions(route, req, routeActions);
    return routeActions;
  }, []);

  const promises = actions.map((action) => store.dispatch(action()));

  // Helmet Action to set meta info based on the URL
  if (Meta[req.url]) {
    promises.push(store.dispatch(setHelmetInfo(Meta[req.url])));
  }

  return Promise.allSettled(promises)
    .then(async () => {
      const markup = renderToString(
        <ChunkExtractorManager extractor={extractor}>
          <StrictMode>
            <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                <App />
              </StaticRouter>
            </Provider>
          </StrictMode>
        </ChunkExtractorManager>
      );

      if (context.url) {
        // If context has a url property, then we need to handle a redirection in Redux Router
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
      } else {
        // Otherwise, we carry on...
        // We need to tell Helmet to compute the right meta tags, title, and such
        const helmet = Helmet.renderStatic();
        const state = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
        const preloadScripts = extractor
          .getLinkTags()
          ?.split('\n')
          ?.filter((link) => link?.includes('as="script"'))
          ?.join('');
        // Pass all this nonsense into our HTML formatting function above

        if (!htmlFileData) {
          htmlFileData = await readHtmlFileData(res);
        }
        const styleElements = await extractor.getStyleElements();
        const html = injectHTML(htmlFileData, {
          html: helmet.htmlAttributes.toString(),
          title: helmet.title.toString(),
          meta: helmet.meta.toString(),
          body: markup,
          scripts: extractor.getScriptTags(),
          style: `<style>${getInlineCss(styleElements)}</style>`,
          state,
          preloadScripts,
          theme: req.path === '/test/theme/light' ? 'light' : 'dark',
        });
        res.send(html);
      }
    })
    .catch((error) => console.error('::::: Error :::::', error));
};

export default ({ clientStats }) =>
  (req, res) =>
    renderer(req, res, clientStats);
