import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
// Load Required CSS parts
import '../../styles/tailwind.css';
import '../../styles/fontCalibre.css';
import '../../styles/fontSfMono.css';
import '../../styles/common.css';
import './styles/module.css';

import styles from './styles/portfolio.scss';
import Social from './components/social/social.async';
import Email from './components/email/email.async';
import Footer from './components/footer/footer';

function PortfolioApp() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <Social />
      <Email />
      <Footer />
    </>
  );
}

PortfolioApp.propTypes = {};

PortfolioApp.defaultProps = {};

export default PortfolioApp;
