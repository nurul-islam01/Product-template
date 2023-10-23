/* eslint-disable extra-rules/no-commented-out-code */
import React from 'react';
import loadable from '@loadable/component';
import PortfolioApp from './portfolio';

const Home = loadable(() =>
  import(/* webpackChunkName: "home-page" */ './pages/home/home')
);

const About = loadable(() =>
  import(/* webpackChunkName: "about-page" */ './components/about/about')
);

const Experience = loadable(() =>
  import(/* webpackChunkName: "experience-page" */ './components/jobs/jobs')
);

const Work = loadable(() =>
  import(/* webpackChunkName: "work-page" */ './components/work/work')
);

const Contact = loadable(() =>
  import(/* webpackChunkName: "contact-page" */ './components/contact/contact')
);

const Notfound = loadable(() =>
  import(/* webpackChunkName: "notfound-page" */ './pages/notfound/notfound')
);

const portfolioRoutes = {
  path: '/',
  element: <PortfolioApp />,
  childRoutes: [
    {
      element: <Home />,
      index: true,
    },
    {
      path: '/home',
      element: <Home />,
      index: true,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/experience',
      element: <Experience />,
    },
    {
      path: '/work',
      element: <Work />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <Notfound />,
    },
  ],
};

export default portfolioRoutes;
