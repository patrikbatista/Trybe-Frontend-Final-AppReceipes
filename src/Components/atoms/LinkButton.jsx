import PropTypes from 'prop-types';
import React from 'react';

const LinkButton = ({ src, testid, alt, href }) => (
  <input
    type="image"
    src={ src }
    alt={ alt }
    data-testid={ testid }
    onClick={ () => {
      window.location.href = href;
    } }
  />
);

LinkButton.propTypes = {
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default LinkButton;
