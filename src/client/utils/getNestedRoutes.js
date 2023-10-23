import React from 'react';
import { Route } from 'react-router-dom';

const getNestedRoutes = (route, parentPath = '') => {
  const { path, index = false, childRoutes, ...rest } = route;
  const fullPath = parentPath !== '/' && path ? parentPath + path : path;
  if (childRoutes) {
    return (
      <Route key={path} path={fullPath} index={index} {...rest}>
        {childRoutes?.map((childRoute) => getNestedRoutes(childRoute, path))}
      </Route>
    );
  }
  return <Route key={path} index={index} path={fullPath} {...rest} />;
};

export default getNestedRoutes;
