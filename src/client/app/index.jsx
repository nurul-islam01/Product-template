import React from 'react';
import { Routes } from 'react-router-dom';
import getNestedRoutes from '@utils/getNestedRoutes';
import Page from '@components/common/helmet/helmet';
import RouteList from '@client/routes';

function App() {
  return (
    <Page>
      <Routes>{RouteList.map((route) => getNestedRoutes(route))}</Routes>
    </Page>
  );
}

export default App;
