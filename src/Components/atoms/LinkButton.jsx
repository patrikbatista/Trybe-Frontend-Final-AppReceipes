import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Redirect } from 'react-router';

const LinkButton = ({ src, testid, alt, href, handleClick }) => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to={ href } />;

  return (
    <input
      type="image"
      src={ src }
      alt={ alt }
      data-testid={ testid }
      onClick={ () => {
        handleClick();
        setRedirect(true);
      } }
    />
  );
};

LinkButton.propTypes = {
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

LinkButton.defaultProps = {
  handleClick: () => {},
};

export default LinkButton;
