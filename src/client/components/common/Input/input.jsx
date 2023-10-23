/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './input.scss';
function Input({
  name,
  value,
  placeholder,
  id,
  onChange,
  className = '',
  onFocus,
  onBlur,
}) {
  return (
    <input
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={classnames(styles.input, className)}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  onFocus: () => {},
  onBlur: () => {},
};

export default Input;
