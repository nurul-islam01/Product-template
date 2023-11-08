import React from 'react';
import { Outlet } from 'react-router-dom';

function Pages() {
  return (
    <main id="main-content">
      <h1>Try to build this app</h1>
      <Outlet />
    </main>
  );
}

export default Pages;
