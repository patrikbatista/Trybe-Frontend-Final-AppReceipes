import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, testId }) => (
  <button
    type="button"
    data-testid={ testId }
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Button;
