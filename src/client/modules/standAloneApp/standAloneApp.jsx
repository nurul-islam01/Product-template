import React from 'react';
import { Outlet } from 'react-router-dom';
// Load Required CSS parts
import '../../styles/tailwind.css';
import '../../styles/fontCalibre.css';
import '../../styles/fontSfMono.css';
import '../../styles/common.css';
import './styles/module.css';

function StandAloneApp() {
  return (
    <main id="main-content">
      <Outlet />
    </main>
  );
}

StandAloneApp.propTypes = {};

StandAloneApp.defaultProps = {};

export default StandAloneApp;
