import React from 'react';
import PropTypes from 'prop-types';
import styles from './simpleicon.scss';

function SimpleIcon({ name, className }) {
  let iconClasses = `${styles[`icon-${name}`]} `;
  if (className) iconClasses += className;
  return <i className={iconClasses} />;
}

SimpleIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SimpleIcon.defaultProps = {
  className: '',
};

export default SimpleIcon;
