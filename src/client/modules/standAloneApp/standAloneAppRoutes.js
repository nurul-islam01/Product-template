/* eslint-disable extra-rules/no-commented-out-code */
import React from 'react';
import loadable from '@loadable/component';
import StandAloneApp from './standAloneApp';

const Json = loadable(() =>
  import(/* webpackChunkName: "json-page" */ './json/Json')
);

const standAloneAppRoutes = {
  path: '/app',
  element: <StandAloneApp />,
  childRoutes: [
    {
      element: <Json />,
      index: true,
    },
    {
      path: '/json-key-path-finder',
      element: <Json />,
    },
  ],
};

export default standAloneAppRoutes;
