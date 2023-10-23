import React from 'react';
import { string, bool, element, oneOfType } from 'prop-types';
import { Link } from 'react-router-dom';

function PrimaryLink({ children, href, to, internal, ...rest }) {
  if (internal) {
    return (
      <Link to={href || to} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href || to} {...rest}>
      {children}
    </a>
  );
}

PrimaryLink.propTypes = {
  children: oneOfType([element, string]).isRequired,
  href: string,
  to: string,
  internal: bool,
};

PrimaryLink.defaultProps = {
  href: '#',
  to: '#',
  internal: false,
};

export default PrimaryLink;
