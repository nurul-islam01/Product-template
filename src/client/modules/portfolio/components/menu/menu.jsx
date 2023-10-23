/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import resume from '@assets/resume.pdf';
import PrimaryLink from '@components/common/PrimaryLink/PrimaryLink';
import styles from './menu.scss';

const getMenuStyle = (isMenuOpen) => {
  return {
    transform: `translateX(${isMenuOpen ? '0' : '100'}vw)`,
    visibility: `${isMenuOpen ? 'visible' : 'hidden'}`,
  };
};

function Menu({ isMenuOpen, toggleMenu, links }) {
  return (
    <div
      className={styles.menu}
      onClick={() => toggleMenu()}
      style={getMenuStyle(isMenuOpen)}
    >
      <aside className={styles.aside}>
        <div className={styles.nav}>
          <ol>
            {links.map(({ name, to }) => (
              <li key={name}>
                <PrimaryLink href={to} internal>
                  {name}
                </PrimaryLink>
              </li>
            ))}
          </ol>
          <a className={styles.resumeLink} href={resume}>
            Resume
          </a>
        </div>
      </aside>
    </div>
  );
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired,
};

export default Menu;
