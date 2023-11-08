import React from 'react';

import Pages from './components/pages';
import HomePage from './components/pages/home';
import NotFoundPage from './components/pages/not-found';

export default [
  {
    path: '/',
    element: <Pages />,
    childRoutes: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
