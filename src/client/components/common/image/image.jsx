import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import styles from './image.scss';

function Placeholder() {
  return <div className={styles.placeholder} />;
}

function Image({ src, alt, lazy, className, lazyloadOptions }) {
  if (lazy) {
    return (
      <LazyLoad {...lazyloadOptions} once>
        <img alt={alt} className={className} src={src} />
      </LazyLoad>
    );
  }
  return <img src={src} alt={alt} className={className} />;
}

Image.propTypes = {
  lazy: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  lazyloadOptions: PropTypes.object,
};

Image.defaultProps = {
  lazy: true,
  alt: '',
  className: '',
  lazyloadOptions: {
    offset: 100,
    placeholder: <Placeholder />,
  },
};

export default Image;
