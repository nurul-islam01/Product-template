/* eslint-disable extra-rules/no-commented-out-code */
import React from 'react';
import loadable from '@loadable/component';
import PortfolioApp from './portfolio';
import { getSSRData } from './pages/ssr/actions';

const Home = loadable(() =>
  import(/* webpackChunkName: "home-page" */ './pages/home/home')
);

const SSR = loadable(() =>
  import(/* webpackChunkName: "ssr-page" */ './pages/ssr/ssr')
);

const Notfound = loadable(() =>
  import(/* webpackChunkName: "notfound-page" */ './pages/notfound/notfound')
);

const testRoutes = {
  path: '/test',
  element: <PortfolioApp />,
  childRoutes: [
    {
      index: true,
      element: <SSR />,
      fetchRouteData: [getSSRData],
    },
    {
      path: '/ssr',
      element: <SSR />,
      fetchRouteData: [getSSRData],
    },
    {
      path: '/theme/:theme',
      element: <Home />,
    },
    {
      path: '*',
      element: <Notfound />,
    },
  ],
};

export default testRoutes;
