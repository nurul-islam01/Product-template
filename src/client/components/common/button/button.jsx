import React from 'react';
import PropTypes, { object } from 'prop-types';
import classnames from 'classnames';
import styles from './button.scss';
import PrimaryLink from '../PrimaryLink/PrimaryLink';
function Button({ children, theme, className, href, ...restProps }) {
  if (href) {
    return (
      <PrimaryLink
        href={href}
        {...restProps}
        className={classnames(styles.anchor, styles[theme], className)}
      >
        {children}
      </PrimaryLink>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      {...restProps}
      className={classnames(styles.button, styles[theme], className)}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: object.isRequired,
  className: PropTypes.string,
  theme: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  theme: 'primary',
  className: '',
  href: undefined,
};

export default Button;
