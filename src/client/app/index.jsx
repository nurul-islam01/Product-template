import React from 'react';
import { Routes } from 'react-router-dom';
import Page from '@components/common/helmet/helmet';
import RouteList from '@client/routes';
import getNestedRoutes from '@utils/getNestedRoutes';

function App() {
  return (
    <Page>
      <Routes>{RouteList.map((route) => getNestedRoutes(route))}</Routes>
    </Page>
  );
}

export default App;
