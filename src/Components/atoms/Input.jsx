import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ placeholder, testId, name }) => (<input
  type="text"
  name={ name }
  data-testid={ testId }
  placeholder={ placeholder }
/>);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Input;
